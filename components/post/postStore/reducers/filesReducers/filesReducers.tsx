






export const addFilesReducer = (state:any, payload:any) => {

        const images = payload.images;
        const files = payload.files;
        const invalidFiles = payload.invalidFiles;
        const newImages = state.fileUpload.images.slice(0);
        const newFiles = state.fileUpload.files.slice(0);
        const newInvalidFiles = state.fileUpload.invalidFiles.slice(0);

        images.forEach((image:any)=>{
           newImages.push(image);
        });

        files.forEach((file:any)=>{
          newFiles.push(file);
        });

        invalidFiles.forEach((file:any)=>{
          newInvalidFiles.push(file);
        });

        return {
                ...state, 
                fileUpload: {
                        images: newImages,
                        files: newFiles,
                        invalidFiles: newInvalidFiles
                }
        };
};

export default {};