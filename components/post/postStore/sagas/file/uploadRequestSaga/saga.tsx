

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { postForm } from './http';
import { generateFormData } from './utils';
import { incidentFileUploadRequest  } from '../../../actions/files/types';
import { incidentFileWaitingAction, incidentAddFileIdAction  } from '../../../actions/files/actions';

function* uploadRequest(action:any):any {

   try {

      const file = action.payload;
      const payload = {
         clientId: file.clientId, 
         id: -1,
         type: file.type,
         fileId: '',
         url: ''
      };
      yield put(incidentFileWaitingAction(payload));
      const response:any = yield call(postForm, generateFormData(file));
      const data = response.data;
      payload.fileId = data.fileId;
      payload.id = data.id;
      payload.url = data.url;
      yield put(incidentAddFileIdAction(payload));


   } catch (e:any) {

      const error = JSON.parse(e.response.data.error);
     // yield put(incidentFormErrorAction({ message: e.message }));

   }
};

function* uploadRequestSaga() {
  yield takeEvery(incidentFileUploadRequest, uploadRequest);
};

export default uploadRequestSaga; 