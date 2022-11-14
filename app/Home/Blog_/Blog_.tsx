import React from 'react';
import { 
    Blog_Container,
    VisibilityDetector
} from './Blog_Styles';
import {
    Blog_Props
} from './Interfaces';
import Blog from './Blog/Blog';
import SpectrumLoader from '../../Ralphs/SpectrumLoader/SpectrumLoader';
import {
    useBlogFetch
} from './Blog_Hooks';
import useVisibilityDetector from '../../Ralphs/Hooks/useVisibilityDetector/useVisibilityDetector';


const Blog_:React.FC<Blog_Props> = () => {
 
    const { childRef, visible } = useVisibilityDetector(true);
    const { page, list } = useBlogFetch(visible);
     

  return (
    <Blog_Container>
        {page.fetched && visible ? <Blog list={list} /> : <div className="ldr"><SpectrumLoader /></div>}
        <VisibilityDetector ref={childRef}></VisibilityDetector>
    </Blog_Container>
  );
};

export default Blog_;
