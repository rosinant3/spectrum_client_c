import React from 'react';
import { 
    BlogContainer
} from './BlogStyles';
import {
  BlogProps
} from './Interfaces';


const Blog:React.FC<BlogProps> = () => {
  return (
    <BlogContainer>
        Blog Works!
    </BlogContainer>
  );
}

export default Blog;
