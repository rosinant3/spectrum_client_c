import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useActiveIndex } from './SpectrunSwiperHooks';
import SwiperImage from './SwiperImage/SwiperImage';
import ImageInfo from './ImageInfo/ImageInfo';
import ImageIcons from './ImageIcons/ImageIcons';
import styled from '@emotion/styled';
import { SwiperContext } from './utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import './SpectrumSwiper.css';


const SwiperContainer = styled.div`
  height: auto;
  width: 100%;
`;

const SwiperHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

const HeadPart = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const databseImages = [
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    name: 'image1',
    comment: 'comment1'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    name: 'image2',
    comment: 'comment2'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    name: 'image3',
    comment: 'comment3'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    name: 'image4',
    comment: 'comment4'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    name: 'image5',
    comment: 'comment5'
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2',
    name: 'image6',
    comment: 'comment6'
  }
];


function SpectrumSwiper({ swiperFunctions }) {

  const [ activeIndex, setActiveIndex ] = useActiveIndex();

    return (
      <SwiperContext.Provider value={swiperFunctions}>
          <Container>
            <SwiperContainer>
              <SwiperHead>
                <HeadPart>
                  <ImageInfo 
                  
                    name={databseImages[activeIndex].name}
                  
                  />
                </HeadPart>
                <HeadPart>
                  <ImageIcons
                  
                    src={databseImages[activeIndex].src}
                  
                  />
                </HeadPart>
              </SwiperHead>
              <Swiper

                modules={[ Navigation, Pagination, Scrollbar, A11y, Zoom ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                zoom={{
                  maxRatio: 5
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="spectrum-swiper"
                style={{
                  "--swiper-pagination-color": "white",
                  "--swiper-navigation-color": "white",
                }}
                

              >
                {databseImages.map((image, index)=>{
                  return <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                      <SwiperImage  image={image}></SwiperImage>
                    </div>
                    </SwiperSlide>
                })}
              </Swiper>
            </SwiperContainer>

          </Container>
        </SwiperContext.Provider>
    );
};


export default SpectrumSwiper;