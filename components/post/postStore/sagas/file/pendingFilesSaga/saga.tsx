

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { postForm } from './http';
import { generateFormData } from './utils';
import { incidentGetPendingFiles  } from '../../../actions/files/types';
import { incidentPendingFilesWaitingAction, incidentAddPendingFilesAction } from '../../../actions/files/actions';

function* pendingFiles(action:any):any {

   try {

      const incident = action.payload; 
      yield put(incidentPendingFilesWaitingAction());
      const response:any = yield call(postForm, generateFormData({ incident }));
      const data = response.data.data;
      yield put(incidentAddPendingFilesAction(data));

   } catch (e:any) {

    console.log(JSON.parse(e));
      //const error = JSON.parse(e.response.data.error);
     // yield put(incidentFormErrorAction({ message: e.message }));

   }
};

function* pendingFilesSaga() {
  yield takeEvery(incidentGetPendingFiles, pendingFiles);
};

export default pendingFilesSaga; 