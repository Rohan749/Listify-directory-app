import { Box, Card, Container, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CommuteIcon from '@mui/icons-material/Commute';
import LuggageIcon from '@mui/icons-material/Luggage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Restraunts from './Restraunts/Restraunts';
import Shopping from './Shopping/Shopping';
import Automotive from './Automotive/Automotive';
import Hotels from './Hotels/Hotels';
import Education from './Education/Education';
import Health from './Health/Health';
import AOS from "aos";
import "aos/dist/aos.css";

const Body = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Box>
                <Container sx={{ backgroundColor: 'rgb(50, 50, 50, 0.2)', height: { xs: '50rem', md: '100vh' }, paddingTop: '12rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Box data-aos="fade-up" data-aos-delay='200' sx={{ fontSize: { xs: '6rem', lg: '7rem' }, color: 'white', margin: '3rem 0' }}>
                            Listify
                    </Box>
                    <Typography sx={{ fontSize: { xs: '2rem', md: '3rem', lg: '4.3rem' }, textAlign: 'center', color: 'rgb(250, 250, 250)', fontWeight: 'bolder' }}>
                        <div data-aos="fade-zoom-in" data-aos-delay='500'>
                            Explore and connect with the world around you!
                        </div>

                    </Typography>
                        <Card data-aos="fade-zoom-in" data-aos-delay='700' sx={{ marginTop: '2rem', width: '20rem', display: 'flex', justifyContent: 'space-evenly' }}>

                            <IconButton href='#automotive'>
                                <Tooltip title="Automotives">
                                    <CommuteIcon />
                                </Tooltip>
                            </IconButton>
                            <Divider />
                            <IconButton href='#restraunts'>
                                <Tooltip title="Travel">
                                    <LuggageIcon />
                                </Tooltip>

                            </IconButton>
                            <Divider />
                            <IconButton href='#shopping'>
                                <Tooltip title="Shopping">
                                    <ShoppingCartIcon />
                                </Tooltip>
                            </IconButton>
                            <Divider />
                            <IconButton href='#education'>
                                <Tooltip title="Education">
                                    <SchoolIcon />
                                </Tooltip>
                            </IconButton>
                            <Divider />
                            <IconButton href='#health'>
                                <Tooltip title="Health">
                                    <HealthAndSafetyIcon />
                                </Tooltip>
                            </IconButton>
                            <Divider />
                            <IconButton href='#hotels'>
                                <Tooltip title="Travel">
                                    <ModeOfTravelIcon />
                                </Tooltip>
                            </IconButton>
                        </Card>
                </Container>
            </Box>
            <Typography sx={{ color: 'rgb(250, 250, 250)' }}>
                <Automotive />
                <Restraunts />
                <Shopping />
                <Education />
                <Health />
                <Hotels />


            </Typography>
        </>
    )
}

export default Body