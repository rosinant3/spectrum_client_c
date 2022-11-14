import React from 'react';
import { 
    BlogContainer,
    BlogGrid,
    HeadingText
} from './BlogStyles';
import {
    BlogProps
} from './Interfaces';
import HolmesCard from '../../../Ralphs/HolmesCard/HolmesCard';

const Blog:React.FC<BlogProps> = ({ list }) => {
  return (
    <BlogContainer>
        <HeadingText>
            Blog
        </HeadingText>
        <BlogGrid>
        {list.map((post)=>{
            return <HolmesCard key={post.id} post={post} />
        })}
        </BlogGrid>
    </BlogContainer>
  );
}

export default Blog;
