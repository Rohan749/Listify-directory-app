import { BottomNavigation, Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: 'rgb(40, 40, 40)',
        color: 'white',
        height: 'fit-content',
        paddingBottom: '3rem'
      }}>
      <Grid container sx={{
        display: 'flex',
        justifyContent: "space-evenly"
        
      }}>
        <Grid>
          <Typography xs={12} sx={{
            marginTop:"2rem",
            fontSize: '1.5rem'
          }}>ABOUT</Typography>
          <Typography sx={{
            marginTop:"1rem"
          }}>
            <Box>
              <Box>About Listify</Box>
              <Box>Careers</Box>
              <Box>Press</Box>
              <Box>Trust and Safety</Box>
              <Box>Terms and Services</Box>
              <Box>Privacy Policy</Box>
              <Box>Ad Choices</Box>
            </Box>
          </Typography>
        </Grid>
        <Grid>
          <Typography xs={12} sx={{
            marginTop:"2rem",
            fontSize: '1.5rem'
          }}>DISCOVERY</Typography>
          <Typography sx={{
            marginTop:"1rem"
          }}>
            <Box>
              <Box>Collections</Box>
              <Box>Events</Box>
              <Box>DesiDelivery Blog</Box>
              <Box>Support</Box>
              <Box>Developers</Box>
            </Box>
          </Typography>
        </Grid>
        <Grid>
          <Typography xs={12} sx={{
            marginTop:"2rem",
            fontSize: '1.5rem'
          }}>LISTIFY FOR BUSINESS</Typography>
          <Typography sx={{
            margin:"1rem 0 0 0"
          }}>
            <Box>
              <Box>Listify for Business</Box>
              <Box>Business Owner login</Box>
              <Box>Advertise on DesiDelivery</Box>
              <Box>Business Support</Box>
              <Box>Table Management</Box>
              <Box>Claim your business page</Box>
              <Box>Business Support</Box>
            </Box>
          </Typography>
        </Grid>
        <Grid>
          <Typography xs={12} sx={{
            marginTop:"2rem",
            fontSize: '1.5rem'
          }}>WINTER WEAR</Typography>
          <Typography sx={{
            marginTop:"1rem"
          }}>
            <Box>
              <Box>Indian Wear</Box>
              <Box>Western Wear</Box>
              <Box>Lingerie & Night Wear</Box>
              <Box>Footwear</Box>
              <Box>Watches</Box>
              <Box>Fragrances</Box>
              <Box>Fragrances</Box>
              <Box> Sunglasses & Frames</Box>
              <Box>Jewellery</Box>
              <Box>Travel</Box>
            </Box>
          </Typography>
        </Grid>
        <Grid>
          <Typography xs={12} sx={{
            marginTop:"2rem",
            fontSize: '1.5rem'
          }}>TRENDING</Typography>
          <Typography sx={{
            marginTop:"1rem"
          }}>
            <Box>
              <Box>Indian Wear</Box>
              <Box>Western Wear</Box>
              <Box>Lingerie & Night Wear</Box>
              <Box>Footwear</Box>
              <Box>Watches</Box>
              <Box>Fragrances</Box>
              <Box>Fragrances</Box>
              <Box>Sunglasses & Frames</Box>
              <Box>Jewellery</Box>
              <Box>Travel</Box>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </BottomNavigation>
  )
}

export default Footer