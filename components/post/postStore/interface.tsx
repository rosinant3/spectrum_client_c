export interface IGraphics {
    coordinates: string;
    type: string;
    uid: number;
}

export type generateGeometryFunc = (geometry: any, uid: number) => IGraphics;

export type pageType = {
    currentPage: number; 
    from: number; 
    lastPage: number;
    offset: number;
    perPage: number;
    to: number;
    total: number;
    waiting: string;
    tags: number;
    hook: number;
    endHook: number;
    error: string;
};

type textInput = { value: string; error: string; };

type fileInput = { items: any[], page: pageType; error: string; };

export interface incidentFormTypes {

    id: number;
    content: textInput;
    dateTime: { value: Date, error: string };
    color: textInput;
    video: any;
    generalError: string;
    images: fileInput,
    files: fileInput;
    graphics: fileInput;
    videos: fileInput;
}
  
export interface incidentFormActionTypes {
  
    type: string;
    payload: {         
        data: any;
    };
