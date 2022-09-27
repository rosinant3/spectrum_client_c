import { textInput, IGraphics } from '../redux/incidentForm/interface';
import {

    incidentFormContentErrorAction,
    incidentFormColorErrorAction,
    incidentFormDatepickerErrorAction,
    incidentFormErrorAction

} from '../redux/incidentForm/actions';

export const validationFunctions = {
    colorValidation: (value: string, dispatch:any) => {

        if (!value) {
            dispatch(incidentFormColorErrorAction({ message: 'Invalid color input.' }));
            return true;
        }

        
        return false;
    },
    selectedDateValidation: (value: string, dispatch:any) => {

        if (!value) {
            dispatch(incidentFormDatepickerErrorAction({ message: 'Invalid date input.' }));
            return true;
        }
        
        return false;
    },
    contentValidation: (value: string, dispatch:any) => {

        if (value.length === 0) {
            dispatch(incidentFormContentErrorAction({ message: "Content field is required." }));
        }
        
        return false;
    },
    graphicsValidation: (graphics: {server: IGraphics[] }, dispatch:any) => {

        if (graphics.server.length === 0) {
            dispatch(incidentFormErrorAction({ message: "Please mark at least one graphic on the map." }));
            return true;
        }

        return false;
    }


};


export default {};