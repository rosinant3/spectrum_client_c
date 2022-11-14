import { createStore, IModuleStore } from "redux-dynamic-modules";

import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";

import { getUserModule } from './UserStore/UserStoreModules';
/*
import { getAdminModule } from '../redux/admin/adminModule';
import { getWebsiteModule } from '../redux/website/websiteModule';
import getLanguageModule from '../redux/language';
*/
interface IState {}

const store: IModuleStore<IState> = createStore(
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


export default store;
