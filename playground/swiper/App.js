import React, { useRef, useContext, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import SpectrumSwiper from './swiper/SpectrumSwiper';
import { SwiperContext } from './swiperUtils';

const useSwiperfunctions = () => {

  const deleteImage = useCallback((e, info)=>{
    console.log(e);
    console.log(info);
  },[]);

  const updateComment = useCallback((e, info)=>{
    e.preventDefault();
    console.log(e);
    console.log(info);
  },[]);

  return { deleteImage, updateComment }

};


function App() {

  const swiperFunctions = useSwiperfunctions();
  return (
    <div className="App">
        <SpectrumSwiper swiperFunctions={swiperFunctions}></SpectrumSwiper>
    </div>
  );
}

export default App;
