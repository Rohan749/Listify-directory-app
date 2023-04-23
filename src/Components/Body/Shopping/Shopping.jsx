import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import CarouselSection from '../Carousel/CarouselSection'
import { Link } from 'react-router-dom'
const img1 = 'https://blog.zolostays.com/wp-content/uploads/2019/09/Phoenix-marketcity-BLR.jpg'
const img2 = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/68/3e/36/inside.jpg?w=500&h=-1&s=1'
const img3 = 'https://www.karnataka.com/wp-content/uploads/2013/12/garuda-mall.jpg'
const img4 = 'https://myweekendtrips.com/wp-content/uploads/2017/12/mall.png'
const img5 = 'https://lh3.googleusercontent.com/K-RoRiLx03Qr383FjpazfYYoXs7DSzhASaSPxtRUUM7sAHBJAAvxor-4Rq6y-ESUqVUH4t5HlKt1i7KZZLeRRU90cw4=w500-rw'
const img6 = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/06/cc/3f/phoenix-marketcity.jpg?w=500&h=-1&s=1'

const Shopping = () => {
  return (
    <Box id='shopping'>
        <Container sx={{ minHeight: {xs: '30rem', md:'calc(100vh - 5rem)'}, backgroundColor: 'rgb(50, 50, 50, 0.2)', paddingTop: '6rem'}}>
                <Typography gutterBottom sx={{fontSize: {xs: '2rem', lg: '3rem'}, fontWeight: 'bolder', textAlign: 'center'}}>
                    You Don't wanna miss these places for shopping!
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
                  <Link to="/shopping">
                  <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>See More!</Button>
                  </Link>
                </Typography>
            </Container>
    </Box>
  )
}

export default Shopping