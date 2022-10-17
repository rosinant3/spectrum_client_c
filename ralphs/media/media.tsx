/*import React from 'react';
import { useIncident, useCheckboxes } from '../../utils/incidentUtility';  
import {    
 
    SelectContainer,
    PdfsContainer,
    ImagesContainer,
    VideoContainer
  
} from '../../mapComponents';
import Videos from './videos/videos';
import Pdfs from './files/files';
import Images from './images/images';

interface MediaProps {
    id: any;
    incident: any;
} 

const Media: React.FC<MediaProps> = ({ id, incident }) => {

    const post = useIncident({ id, incident });
    const data = post.data;
    const imagesLabel = post.images; 
    const videosLabel = post.videos;
    const images = data.images;
    const imagesError = data.imagesError;
    const files = data.files;
    const filesError = data.filesError;
    const videos = data.videos;
    const videosError = data.videosError;
    const errors = post.errors;
    const videoError = data.videoError;
    const video_store = data.video_store;
    
    const { 
	  
      iCheckbox, 
      pCheckbox, 
      vCheckbox, 
      checkboxOnChangeImages, 
      checkboxOnChangePdfs, 
      checkboxOnChangeVideos 
		
	  } = useCheckboxes({ images, videos, files }, incident);

    return (<React.Fragment>
            <SelectContainer>
              <input onChange={checkboxOnChangeImages} type="checkbox" value="Images" checked={iCheckbox}/>
              <label>{imagesLabel}</label>
              <input onChange={checkboxOnChangePdfs} type="checkbox" value="PDF" checked={pCheckbox}/>
              <label>PDF</label>
              <input onChange={checkboxOnChangeVideos} type="checkbox" value="Videos" checked={vCheckbox}/>
              <label>{videosLabel}</label>
            </SelectContainer>

            <ImagesContainer style={{ display: iCheckbox === true ? "block" : "none" }}>
              <Images items={images} imagesError={imagesError} />
            </ImagesContainer>

            <PdfsContainer style={{ display: pCheckbox === true ? "block" : "none" }}>
              <Pdfs items={files} pdfsError={filesError} />
            </PdfsContainer>

            <VideoContainer style={{ display: vCheckbox === true ? "block" : "none" }}>
				      <Videos 
                        
                items={videos} 
                errors={errors} 
                videosError={videosError} 
                videoError={videoError} video_store={video_store} 
                        
              />
            </VideoContainer>  
        </React.Fragment>);
}

export default Media; */

export default {};