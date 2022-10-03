import { pageType } from '../interface';

export interface IGraphics {
    coordinates: string;
    type: string;
    uid: number;
}

interface IGeometry {
    server: string[];
    client:  { uid: number, geoData: { data: any; uid: number }};
};

export interface IGeometryPayload {
    server: string[];
    client: any[];
};

export type generateGeometryFunc = (geometry: any, uid: number) => IGeometry;


export type textInput = { value: string; error: string; };

type fileInput = { items: any[], page: pageType; error: string; };

export interface incidentFormTypes {

    id: number;
    content: textInput;
    dateTime: { value: Date, error: string };
    color: textInput;
    video: any;
    generalError: string;
    graphics: { server: string[][], client: any[] };
    fileUpload: { images: any[], files: any[], invalidFiles: any[] };
    waiting: boolean;
}
  
export interface incidentFormActionTypes {
  
    type: string;
    payload: {         
        data: any;
    };
}

export interface IGetData {
    hook: string;
    currentPage: number;
    perPage: number;
    case_: number;
}

export type IGetFunction = (data: IGetData, config: any) => Promise<any>;
