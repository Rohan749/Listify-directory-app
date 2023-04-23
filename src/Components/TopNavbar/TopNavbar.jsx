import { AppBar, Box, Button } from '@mui/material'
import React from 'react'

import LeftDrawer from '../LeftDrawer/LeftDrawer';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <>

            <AppBar sx={{ padding: '1rem 1.5rem', backgroundColor: 'rgb(35, 35, 35)' }} position='fixed'>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box>
                                <LeftDrawer />
                            </Box>
                            <Box>
                            <Link to="/">
                                <Box sx={{fontSize: {xs: '2rem', md: '3rem'}, paddingLeft: {xs: '1rem'}}}>Listify</Box>
                            </Link>
                            </Box>
                        </Box>
                        <Button size='large' variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd'}}>
                            SIGN-UP
                        </Button>
                    </Box>
            </AppBar>

        </>
    )
}

export default TopNavbar