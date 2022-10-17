import { actionFunction } from '../../interfaces';

export interface FileUploadActions {
    addFiles: actionFunction
};

export interface FileUploadProps {
    actions: FileUploadActions;
};