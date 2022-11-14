import React from 'react';
import { 
    CatalogContainer,
    CatalogGrid,
    HeadingText
} from './CatalogStyles';
import {
    CatalogProps
} from './Interfaces';
import HolmesCard from '../../../Ralphs/HolmesCard/HolmesCard';

const Catalog:React.FC<CatalogProps> = ({ list }) => {
  return (
    <CatalogContainer>
        <HeadingText>
            Catalog
        </HeadingText>
        <CatalogGrid>
        {list.map((post)=>{
            return <HolmesCard key={post.id} post={post} />
        })}
        </CatalogGrid>
    </CatalogContainer>
  );
}

export default Catalog;
