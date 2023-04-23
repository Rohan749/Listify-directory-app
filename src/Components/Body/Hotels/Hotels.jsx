import { Box, Button, Container, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import CarouselSection from '../Carousel/CarouselSection'
import { Link } from 'react-router-dom'
const img1 = 'https://q-xx.bstatic.com/xdata/images/hotel/max750/71560782.jpg?k=2f9313a3c57e392fbb412883c6a92fd21a8711df52f836fe0f17df00270d2cb2&o='
const img2 = 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg'
const img3 = 'https://www.gannett-cdn.com/presto/2022/02/07/USAT/db2d5db7-515f-4799-ad7d-78f14ab33204-image7.jpg?width=592&format=pjpg&auto=webp&quality=70'
const img4 = 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20026625-dea93242808e54a2ddfea3f94ad9df52.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768'
const img5 = 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20037752-bddea5f10bf18d9d724eea187165da48.jpeg?_src=imagekit&tr=c-at_max,h-488,q-40,w-768'
const img6 = 'https://cf.bstatic.com/xdata/images/hotel/max500/235493132.jpg?k=7970edc2064a0436be8d10097c4fdc45935a85d5dbd76f2028b06df0653baf62&o=&hp=1'


const Hotels = () => {
  return (
    <Box id='hotels'>
        <Container sx={{ minHeight: {xs: '30rem', md:'calc(100vh - 5rem)'}, backgroundColor: 'rgb(50, 50, 50, 0.2)', paddingTop: '6rem'}}>
                <Typography gutterBottom sx={{fontSize: {xs: '2rem', lg: '3rem'}, fontWeight: 'bolder', textAlign: 'center'}}>
                    Book your stay today and indulge in a world-class hospitality experience!
                </Typography>
                <Divider />
                <CarouselSection
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
                />
                <Typography sx={{ display:'flex', justifyContent: 'right', padding: '3rem'}}>
                    <Link to="/hotelTravel">
                    <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>See More!</Button>
                    </Link>
                </Typography>
            </Container>
            <Typography sx={{backgroundColor: 'rgb(40, 40, 40)', padding: '2rem', color: 'white'}}>
        <Container>
        <Typography textAlign="center" sx={{fontSize: {xs: '2rem', md: '2.6rem', lg: '3.5rem'},}}>
            Grow Your Business!
            <Typography sx={{marginLeft: '5px'}}>
                Get free project cost delivered to your door!
            </Typography>
        </Typography>
        <Typography sx={{display:'flex', alignItems: 'center', justifyContent:'space-evenly', marginTop:'3rem'}}>
            <Typography sx={{display: {sm: 'block', md: 'flex'}, alignItems:'center'}}>
                <TextField variant='standard' label="Enter your Email" sx={{ width:{xs:'100%', md: '30rem'}, fontSize: {xs: '2rem', md: '2.6rem', lg: '4rem'}}}/>
                <Button size='large' variant='outlined' sx={{ border:'1px solid white',color:'white',marginLeft:{sm:'0', md:'5px'}, fontSize: {xs: '1rem', lg: '1.4rem'}, width: {xs:'100%', md:'7rem'}}}>Submit</Button>
            </Typography>
        </Typography>
        </Container>
    </Typography>
    </Box>
  )
}

export default Hotels