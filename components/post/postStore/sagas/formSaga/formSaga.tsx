

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { postForm } from './formHttp';
import { addIncident, toggleIncidentWaiting  } from '../../actions/types';
import { incidentFormAddAction, incidentFormErrorAction } from '../../actions/actions';
import { generateFormData } from '../utils';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action:any):any {
   try {
      const data = action.payload;
      const formData = generateFormData(data);
      yield put({type: toggleIncidentWaiting});
      const response:any = yield call(postForm, formData);
      const responseData = response.data;
      delete data.caseId; 
      delete data.userId;
      data.id = responseData.incidentId;

      console.log(data);
      console.log(response);

      //yield put(incidentFormAddAction(incident.data));


   } catch (e:any) {
      const error = JSON.parse(e.response.data.error);
      yield put(incidentFormErrorAction({ message: e.message }));
   }
}


function* formSaga() {
  yield takeEvery(addIncident, fetchUser);
}

export default formSaga; 