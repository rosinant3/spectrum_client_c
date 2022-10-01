import React from 'react';
import { FileUploadContext } from '../FileUploadStore/FileUploadStore';


export const useSlicedImages = () => {

    const { state } = React.useContext(FileUploadContext);
    const images = state.images.slice(0, 3);
    return { images };
};