import { call, put, takeEvery, take, fork, delay, cancel, cancelled } from 'redux-saga/effects'
import { incidentFileUpload, incidentFilePause  } from '../../../actions/files/types';
import { 
  
    incidentFileWaitingAction, 
    incidentFileUploadAction, 
    incidentFileSetProgressAction  
  
} from '../../../actions/files/actions';
import { getBinaryFile } from '../../../../../../../../ralphs/inputs/FileUpload/utils';
import uploadFileChunk from './http';


function* uploadFile(action:any):any {

   try {

        let file = action.payload;
        const payload = {
            id: file.id,  
            type: file.type,
            fileId: file.fileId,
            startingByte: file.progress.startingByte,
            name: file.name, 
            url: 'http://localhost:5000/incidents/files/upload'
        };

        const binary = yield call(getBinaryFile, file.url);
 
        if (file.progress.waiting === false) {
          yield put(incidentFileWaitingAction(payload));
        } 

        const channel = yield call(uploadFileChunk, { file: binary, options: payload });
        yield fork(function* () { yield take(incidentFilePause); console.log('closing'); channel.close(); });
 
        while (true) {

            const { progress, err, success } = yield take(channel);

            if (err) {
              console.log('error'); 
               // yield put(uploadFailure(file, err));
                return;
            }

            if (success) {
               yield delay(5000);
               yield put(incidentFileUploadAction(file)); 
              return;
            }

            if (progress) { 
              file = { 
                ...file, 
                progress: { 
                  waiting: true, 
                  startingByte: progress.loaded,
                  percentage: progress.percentage,
                  loaded: progress.loaded
                }};
              yield put(incidentFileSetProgressAction(file)); 
            }
            //yield put(uploadProgress(file, progress));
        }

    } catch (e:any) {
     // const error = JSON.parse(e.response.data.error);
     // yield put(incidentFormErrorAction({ message: e.message }));
   } finally {

    if (yield cancelled()) {
      return action.payload;
    }

   }
};

function* uploadFileSaga():any {

  while (true) {
    
    const fileUpload = yield fork(function*():any {
      while (true) {
        const action = yield take(incidentFileUpload);
        yield fork(uploadFile, action);
        
      }
    });

    yield take(incidentFilePause);
    cancel(fileUpload);

  }
};

export default uploadFileSaga; 