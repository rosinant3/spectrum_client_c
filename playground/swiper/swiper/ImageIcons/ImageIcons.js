import styled from '@emotion/styled';
import DownloadIcon from '@mui/icons-material/Download';
import { useLinkDownload } from './ImageIconsHooks';
import { iconStyle } from '../utils';
import ImageComment from './ImageComment/ImageComment';
import DeleteIconComp from './DeleteIconComp/DeleteIconComp';


const SwiperContainer = styled.div`

    position: relative;
    padding: 0.5rem;
    display: flex;
    justif-content: center;
    align-items: center;
    text-align: center;

    > svg {

        transition: opacity 250ms ease-in-out;
        margin-right: 1rem;
    }

    > svg:hover {
        opacity: 0.5;
    }
`;

function ImageIcons({ src }) {
    const [ download ] = useLinkDownload(src);
    return (<SwiperContainer>
                <DownloadIcon onClick={download}  style={iconStyle}></DownloadIcon>
                <DeleteIconComp />
                <ImageComment />
            </SwiperContainer>
        );
};


export default ImageIcons;