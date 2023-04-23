import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import CarouselSection from '../Carousel/CarouselSection'
import { Link } from 'react-router-dom'
const img1 = 'https://www.dineout.co.in/blog/wp-content/uploads/2016/12/Le-Cirque-Signature-700x467.jpg'
const img2 = 'https://im.whatshot.in/img/2021/Mar/luxury-3-1615784817.jpg'
const img3 = 'https://im.whatshot.in/img/2021/Mar/luxury-is-5-1615534755.jpg'
const img4 = 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/q/r/p22432-1480148177583944d131157.jpg?w=400'
const img5 = 'https://images.otstatic.com/prod/23763519/1/large.jpg'
const img6 = 'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/the-palms-hotel-and-spa/media/cache/the-restaurant-pool-terrace-evening-62e02bea5dace-747x744.png'

const Restraunts = () => {
    return (
        <Box id='restraunts'>
            <Container sx={{ minHeight: {xs: '30rem', md:'calc(100vh - 5rem)'}, backgroundColor: 'rgb(50, 50, 50, 0.2)', paddingTop: '6rem'}}>
                <Typography gutterBottom sx={{fontSize: {xs: '2rem', lg: '3rem'},fontWeight: 'bolder', textAlign: 'center'}}> 
                Some popular Restraunt near you!
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
                    <Link to="restraunts">
                    <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>See More!</Button>
                    </Link>
                </Typography>
            </Container>

        </Box>
    )
}

export default Restraunts