
const idGenerator = () => {
  let S4 = () => Math.floor((1+Math.random())*0x10000).toString(16).substring(1); 
  let guid = `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  return guid.toLowerCase();  
}

export const fileOnChange = (e: any, type: "pdfs" | "images", dispatch:any, prefix: string) => {

  const files: any = e.target.files;
  let _validFileExtensions = ["image/png", "image/x-png", "image/gif", "image/jpeg"];  
  if (type === "pdfs") {
    _validFileExtensions = ["application/pdf"];  
  }
  if (files && files.length) {

    const pdfs:any = [];

    for (let i = 0; i < files.length; i++) {
      const fileType = files[i].type;
      const newFile: { 
          
          file: any;
          reader: any; 
          rotate: number;
          degrees: number;
          active: string;
          id: string; 
          comment: string;
      
      } = { file: files[i], reader: "", active: 'false', id: idGenerator(), rotate: 0, degrees: 0, comment: "" };
      newFile["rotate"] = 0;
      let validExtension = false;
      for (let j = 0; j < _validFileExtensions.length; j++) {
        let sCurExtension = _validFileExtensions[j];
        if (sCurExtension === fileType) {
          validExtension = true;
          break;
        }
      }
      if (validExtension === true) {
        if (type === "images") {

          const url = URL.createObjectURL(files[i]);

          newFile["reader"] = url;
          newFile["id"] = idGenerator();
          dispatch({ type: `${prefix}_ADD_IMAGE`, payload: { value: [newFile] } });

        } else if (type === "pdfs") {
          const newPdf = { file : files[i], id: idGenerator() };
          pdfs.push(newPdf);
        }
      }
    }
    if (type === "pdfs") {
      dispatch({ type: `${prefix}_ADD_PDFS`, payload: { value: pdfs } });
    }
    e.target.value = "";
  }
}