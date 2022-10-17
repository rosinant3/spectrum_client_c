

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { postForm } from './http';
import { generateFormData } from './utils';
import { incidentFileUploadRequest  } from '../../../actions/files/types';
import { incidentFileWaitingAction, incidentAddFileIdAction  } from '../../../actions/files/actions';

function* uploadRequest(action:any):any {

   try {

      const file = action.payload;
      const data = file.data;
      const payload = {
         id: file.id, 
         type: file.type,
         fileId: ''
      };
      yield put(incidentFileWaitingAction(payload));
      const response:any = yield call(postForm, generateFormData({ name: file.name, type: file.type }));
      const fileId = response.data.fileId;
      payload.fileId = fileId;
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