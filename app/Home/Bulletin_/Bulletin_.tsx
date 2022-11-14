import React from 'react';
import { 
    Bulletin_Container
} from './Bulletin_Styles';
import {
    Bulletin_Props
} from './Interfaces';
import Bulletin from './Bulletin/Bulletin';
import SpectrumLoader from '../../Ralphs/SpectrumLoader/SpectrumLoader';
import {
    useBulletinFetch
} from './Bulletin_Hook';
import useVisibilityDetector from '../../Ralphs/Hooks/useVisibilityDetector/useVisibilityDetector';


const Bulletin_:React.FC<Bulletin_Props> = () => {

    const { page, list } = useBulletinFetch();
    const { childRef, visible } = useVisibilityDetector(false);

  return (
    <Bulletin_Container ref={childRef}>
        {page.fetched && visible ? <Bulletin list={list} /> : <SpectrumLoader />}
    </Bulletin_Container>
  );
};

export default Bulletin_;
