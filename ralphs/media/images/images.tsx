import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {

    ImagesContainer,
    ImagesItems,
    InputContainer,
    SlideButtonContainer,
    SlideButton,
    ErrorText

} from './imagesComponents';
import { fileOnChange } from '../files/fileHandler';
import Image from './image';
import { animated } from 'react-spring';
import { usePagination } from '../../hooks/paginationHook';

interface ImagesProps {

    items: any;
    imagesError: string;

} 


const Images: React.FC<ImagesProps> = (props) => {
  
  const dispatch:any = useDispatch();
  const inputRef:any = useRef(null);
  const [ change, setChange ] = useState([] as number[]);
  const images = props.items; 
  const imagesError = props.imagesError;
  const { active, propss, dragRef, setActive, buttonRef } = usePagination();
  const store = useSelector((state: any) => { 

    const language = state.language;
    const activeLanguage = language[language.active];

    return {

      selectImages: activeLanguage.selectImages

    } 
  });
  const selectImages = store.selectImages;

  const fileOnChangeEvent = (e:any)=>{ fileOnChange(e, "images", dispatch, 'INCIDENT') };
  
  return (<ImagesContainer>
    <InputContainer onClick={()=>{ inputRef.current.click(); }}>
        <input 

            onChange={fileOnChangeEvent}
            multiple={true} 
            accept="image/*"  
            style={{ display: "none" }}
            type="file" 
            name="imagesInput"
            ref={inputRef} 

        />
        <span>{selectImages}</span> 
    </InputContainer> 
    {images?.length > 0 ? <ImagesItems>
    {images?.map((image:any, index: number)=>{

        let itemActive = false;

        if (index === active) {
            itemActive = true;
        }

        return <Image active={itemActive} key={image.id} image={image} index={index} change={change} setChange={setChange} />;

    })}
    </ImagesItems> : ""}
    <SlideButtonContainer data-ignore="true" style={{position: "relative"}}>
            <animated.div ref={dragRef} style={propss}>
            {images.map((image: any, index: number)=>{
                let color = "white";
                let backgroundColor = "var(--mainColor)";
                let opacity = 1;

                if (index === active) {
                    color = "white";
                    backgroundColor = "var(--mainActiveColor)";
                    opacity = 0.5
                }
 
                return <SlideButton 
                

                            data-ignore="true"
                            data-index={index}
                            ref={buttonRef}
                            style={{ 
                                
                                    color: color, 
                                    backgroundColor: backgroundColor,
                                    backgroundImage: `url('${image.reader}')`, 
                                    opacity: opacity
                            }} 
                            key={image.id}
                            
                        >
                        </SlideButton>
            })}
            </animated.div>
        </SlideButtonContainer>
    <ErrorText>{imagesError}</ErrorText>
  </ImagesContainer>);
}

export default Images;