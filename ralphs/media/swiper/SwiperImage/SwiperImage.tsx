import React from 'react';
import { Box } from '@mui/material';

interface SwiperImageProps {
    image:any;
};
  
const SwiperImage: React.FC<SwiperImageProps> = ({ image }) => {

    const { src } = image;

    return (
        <React.Fragment>
            <Box
                component="img"
                sx={{
                height: "100%",
                width: "auto"
                }}
                alt="The house from the offer."
                src={src}
            />
        </React.Fragment>
    );
}


export default SwiperImage;