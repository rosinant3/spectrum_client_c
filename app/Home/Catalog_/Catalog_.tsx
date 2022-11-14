import React from 'react';
import { 
    Catalog_Container,
    VisibilityDetector
} from './Catalog_Styles';
import {
    Catalog_Props
} from './Interfaces';
import Catalog from './Catalog/Catalog';
import SpectrumLoader from '../../Ralphs/SpectrumLoader/SpectrumLoader';
import {
    useCatalogFetch
} from './Catalog_Hooks';
import useVisibilityDetector from '../../Ralphs/Hooks/useVisibilityDetector/useVisibilityDetector';


const Catalog_:React.FC<Catalog_Props> = () => {
 
    const { childRef, visible } = useVisibilityDetector(true);
    const { page, list } = useCatalogFetch(visible);
     

  return (
    <Catalog_Container>
        {page.fetched && visible ? <Catalog list={list} /> : <div className="ldr"><SpectrumLoader /></div>}
        <VisibilityDetector ref={childRef}></VisibilityDetector>
    </Catalog_Container>
  );
};

export default Catalog_;