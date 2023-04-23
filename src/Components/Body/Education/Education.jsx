import { Box, Button, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import CarouselSection from '../Carousel/CarouselSection'
import { Link } from 'react-router-dom'

const img1 = 'https://www.wiprolighting.com/media/images/blogpost/image/lighting-in-educational-institutions---wipro-lighting-1588492640.jpg'
const img2 = 'https://images.news18.com/ibnlive/uploads/2020/06/1591879200_indian-institute-of-technology-madras.jpg'
const img3 = 'https://www.shemford.com/wp-content/uploads/2019/06/education-system.jpg'
const img4 = 'https://makeinbusiness.com/wp-content/uploads/2019/11/Improve-Education-Experiences.jpg'
const img5 = 'https://thedailyguardian.com/wp-content/uploads/2023/04/hiher.jpg'
const img6 = 'https://digitalagencynetwork.com/wp-content/uploads/2019/01/15-digital-marketing-action-plans-for-educational-institutes-in-2019.jpg'

const Education = () => {
  return (
    <Box id='education'>
        <Container sx={{ minHeight: {xs: '30rem', md:'calc(100vh - 5rem)'}, backgroundColor: 'rgb(50, 50, 50, 0.2)', paddingTop: '6rem'}}>
                <Typography variant="h3" gutterBottom sx={{fontSize: {xs: '2rem', lg: '3rem'},fontWeight: 'bolder', textAlign: 'center'}}>
                Unlock your potential and achieve your academic goals!
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
                  <Link to="education">
                  <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>See More!</Button>
                  </Link>
                </Typography>
            </Container>

    </Box>
  )
}

export default Education