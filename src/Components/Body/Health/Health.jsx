import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import CarouselSection from '../Carousel/CarouselSection'
import { Link } from 'react-router-dom'
const img1 = 'https://ehealth.eletsonline.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg'
const img2 = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/hosp.jpeg?IL_XbMrKTZCs6A6wd_AvWqdcMC_liNBU'
const img3 = 'https://cdn.britannica.com/12/130512-004-AD0A7CA4/campus-Riverside-Ottawa-The-Hospital-Ont.jpg'
const img4 = 'https://www.air.org/sites/default/files/styles/100_/public/2022-05/nurse-and-patient-in-hopsital-cal-hospital.jpg?itok=hK2wZ0on'
const img5 = 'https://campaignforaction.org/wp-content/uploads/2016/12/movin.jpg'
const img6 = 'https://www.piramalrealty.com/blog/wp-content/uploads/2022/11/20221118-article-banner-04.jpg'

const Health = () => {
  return (
    <Box id='health'>
        <Container sx={{ minHeight: {xs: '30rem', md:'calc(100vh - 5rem)'}, backgroundColor: 'rgb(50, 50, 50, 0.2)', paddingTop: '6rem'}}>
                <Typography gutterBottom sx={{fontSize: {xs: '2rem', lg: '3rem'},fontWeight: 'bolder', textAlign: 'center'}}>
                Experience compassionate care and state-of-the-art medical treatment 
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
                  <Link to="/hospital">
                  <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>See More!</Button>
                  </Link>
                </Typography>
            </Container>
    </Box>
  )
}

export default Health