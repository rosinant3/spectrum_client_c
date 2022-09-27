import React from 'react';
import { Box } from '@mui/material';

function SwiperImage({ image }) {

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