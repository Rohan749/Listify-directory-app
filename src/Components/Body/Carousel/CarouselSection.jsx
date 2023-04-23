import { Box, Container } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSection = (props) => {

  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  

  return (
    <>
      <Container>
      <Carousel responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={1000}
        keyBoardControl={true}
        ssr={true}
      >
        <Box sx={{borderRadius: '10px', margin: '5px', height: {xs: '20rem',md:'25rem'}, backgroundImage: `url(${props.img1})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
        <Box sx={{borderRadius: '10px', margin: '5px', height: {xs: '20rem',md:'25rem'}, backgroundImage: `url(${props.img2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
        <Box sx={{borderRadius: '10px', margin: '5px', height: {xs: '20rem',md:'25rem'}, backgroundImage: `url(${props.img3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
        <Box sx={{borderRadius: '10px', margin: '5px', height: {xs: '20rem',md:'25rem'}, backgroundImage: `url(${props.img4})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
        <Box sx={{borderRadius: '10px', margin: '5px', height: {xs: '20rem',md:'25rem'}, backgroundImage: `url(${props.img5})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
        <Box sx={{borderRadius: '10px', margin: '5px', height: {xs: '20rem',md:'25rem'}, backgroundImage: `url(${props.img6})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
        
      </Carousel>
      </Container>
    </>

  )
}

export default CarouselSection