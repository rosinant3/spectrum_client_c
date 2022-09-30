const _validFileExtensions = ["image/png", "image/x-png", "image/gif", "image/jpeg"];
const _imageExtensions = ["image/png", "image/x-png", "image/gif", "image/jpeg"];   


const baseManager = {

    run: function () {
        const validFiles = this.filterInvalidFiles(this.files);
        const invalidFiles = this.filterValidFiles(this.files);
        const preparedFiles = this.appendObjectUrl(validFiles);
        const images = this.filterImages(preparedFiles);
        const files = this.filterFiles(preparedFiles);
        return { images, files, invalidFiles };
    }
};

const uploadManager = Object.create(baseManager);

uploadManager.filterValidFiles = function(files) {
    return files.filter((file)=>{
        return !_validFileExtensions.includes(file.type);
    });
};

uploadManager.filterInvalidFiles = function(files) {
    return files.filter((file)=>{
        return _validFileExtensions.includes(file.type);
    });
};
    
uploadManager.appendObjectUrl = function (files) {
        files.forEach((file)=>{
            file.url = URL.createObjectURL(file)
        });
        return files;
};

uploadManager.filterImages = function (files) {
        return files.filter((file)=>{
            return _imageExtensions.includes(file.type);
        });
},

uploadManager.filterFiles = function (files) {
        return files.filter((file)=>{
            return !_imageExtensions.includes(file.type);
        });
};

export default uploadManager;