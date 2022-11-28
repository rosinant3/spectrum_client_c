import { createStore, IModuleStore } from "redux-dynamic-modules";

import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";

import { getUserModule } from './UserStore/UserStoreModules';
import { UserTypes } from './UserStore/Interfaces';
/*
import { getAdminModule } from '../redux/admin/adminModule';
import { getWebsiteModule } from '../redux/website/websiteModule';
import getLanguageModule from '../redux/language';
*/
interface IState {
  users?: UserTypes;
}

const store: IModuleStore<any> = createStore(
  {
    initialState: {},
    enhancers: [],
    extensions: [getSagaExtension({} /* saga context */), getThunkExtension()],
  },
  getUserModule(),
  
 /* getAdminModule(), 
  getWebsiteModule(),
  getLanguageModule() */
  /* ...any additional modules */
);

store.subscribe(()=>{
  const user_ = store.getState().user;
  const user = localStorage.getItem('user');
  if (user_.userId !== -1 && user === null) {
    localStorage.setItem('user', JSON.stringify(user_))
  }
});


export default store;
