const _validFileExtensions = ["image/png", "image/x-png", "image/gif", "image/jpeg"];
const _imageExtensions = ["image/png", "image/x-png", "image/gif", "image/jpeg"];   


const baseManager:any = {

    run: function () {
        const validFiles = this.filterInvalidFiles(this.files);
        const invalidFiles = this.filterValidFiles(this.files);
        const preparedFiles = this.appendObjectUrl(validFiles);
        const images = this.filterImages(preparedFiles);
        const files = this.filterFiles(preparedFiles);
        return { images, files, invalidFiles };
    },
    uid: function(){
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
};

const uploadManager = Object.create(baseManager);

uploadManager.filterValidFiles = function(files:any) {
    return files.filter((file:any)=>{
        return !_validFileExtensions.includes(file.type);
    });
};

uploadManager.filterInvalidFiles = function(files:any) {
    return files.filter((file:any)=>{
        return _validFileExtensions.includes(file.type);
    });
};
    
uploadManager.appendObjectUrl = function (files:any) {
        return files.map((file:any)=>{
            return { 
                url: URL.createObjectURL(file), 
                error: '',
                mimetype: file.type,
                name: file.name, 
                fileId: '',
                id: -1,
                clientId: this.uid(),
                progress: {
                    startingByte: 0,
                    loaded: 0,
                    percentage: 0,
                    waiting: false,
                    processing: false,
                    paused: false
                }
            };
        });
};

uploadManager.filterImages = function (files:any) {
        return files.filter((file:any)=>{
            return _imageExtensions.includes(file.type);
        });
};

uploadManager.filterFiles = function (files:any) {
        return files.filter((file:any)=>{
            return !_imageExtensions.includes(file.type);
        });
};

export default uploadManager;