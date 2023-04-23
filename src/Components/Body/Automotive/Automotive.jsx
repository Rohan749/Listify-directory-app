import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CarouselSection from '../Carousel/CarouselSection'
import { Link } from 'react-router-dom'

const img1 = 'https://thumbs.dreamstime.com/b/wide-angle-view-empty-car-dealership-showroom-interior-multiple-seat-paris-france-oct-cars-inside-focus-black-170872291.jpg'
const img2 = 'https://automotiveforbeginners.com/wp-content/uploads/2021/08/auto-shop-near-me-best-mechanic-repair-how-to-find-a-good-reliable-mobile-garage-825x510.jpg'
const img3 = 'https://content.jdmagicbox.com/comp/bangalore/46/080pde01546/catalogue/standrad-auto-since-1949-anepalya-main-road-bangalore-second-hand-car-buyers-hyundai-haf3izje66.jpg'
const img4 = 'https://www.drivespark.com/img/2020/07/pravaig-extinction-mk1-electric-sedan-4-1595230961.jpg'
const img5 = 'https://images.wapcar.my/file1/12dd26d45ed4436392d9872496094292_750x420.jpg'
const img6 = 'https://images.thrillophilia.com/image/upload/s--qVisb9nE--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/089/709/original/1588691521_bmw3.png.jpg?1588691521'

const Automotive = () => {

  return (
    <Box id='automotive'>
        <Container sx={{ minHeight: {xs: '30rem', md:'calc(100vh - 5rem)'}, backgroundColor: 'rgb(50, 50, 50, 0.2)', paddingTop: '6rem'}}>
                <Typography gutterBottom sx={{fontSize: {xs: '2rem', lg: '3rem'}, fontWeight: 'bolder', textAlign: 'center'}}>
                    Visit Awesome places with best automotives near you!
                </Typography>
                <CarouselSection 
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
                />                
                 <Typography sx={{ display:'flex', justifyContent: 'right', padding: '1rem 2rem'}}>
                  <Link to="automobiles">
                    <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>See More!</Button>
                  </Link>
                </Typography>
            </Container>
    </Box>
  )
}

export default Automotive