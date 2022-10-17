import { buffers, eventChannel, END } from 'redux-saga';

const uploadFileChunk = function (this: unknown, ...args: any[]) {

    return eventChannel((emitter:any) => {

        const data = args[0];
        const file = data.file;
        const options = data.options;
        const formData = new FormData();
        const xhr = new XMLHttpRequest();
        const endByte = options.startingByte + 256000;
        const chunk = file.slice(options.startingByte, endByte);

        formData.append('chunk', chunk, options.name); 
        formData.append('fileId', options.fileId);

        xhr.open('POST', options.url, true);
        xhr.setRequestHeader('Content-Range', `bytes=${options.startingByte}-${options.startingByte+chunk.size}/${file.size}`);
        xhr.setRequestHeader('X-File-Id', options.fileId);

        const onProgress = (e: ProgressEvent) => {
            if (e.lengthComputable) {
                //const loaded = options.startingByte + e.loaded;
                const loaded = endByte;
                const total = file.size;
                const per = Math.floor(loaded * 100 / file.size);
                const percentage = per > 100 ? 100 : per;
                emitter({ progress: { loaded, percentage, total } });
            }
        };
        const onFailure = (e: ProgressEvent | null) => {
            emitter({ err: new Error('Upload failed') });
            emitter(END);
        };

        xhr.upload.addEventListener("progress", onProgress);
        xhr.upload.addEventListener("error", onFailure);
        xhr.upload.addEventListener("abort", onFailure);
        xhr.onreadystatechange = () => {
            const { readyState, status } = xhr;
            
            if (readyState === 4) {

                if (status === 200) {
                    emitter({ success: true });
                    emitter(END);
                }
                else {
                    onFailure(null);
                }
            }
        };

        xhr.send(formData); 

        return () => {
            xhr.upload.removeEventListener("progress", onProgress);
            xhr.upload.removeEventListener("error", onFailure);
            xhr.upload.removeEventListener("abort", onFailure);
            xhr.onreadystatechange = null;
            xhr.abort();
        };

    }, buffers.sliding(2));

};



export default uploadFileChunk;