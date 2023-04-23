import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, CardActionArea, Divider, Drawer, IconButton, List } from '@mui/material';
import CommuteIcon from '@mui/icons-material/Commute';
import LuggageIcon from '@mui/icons-material/Luggage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from 'react-router-dom';

const LeftDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <IconButton onClick={() => { setIsDrawerOpen(true) }}>

                    <MenuRoundedIcon sx={{color: 'white', fontSize:{md:'2rem', lg:'2.8rem'}}}/>

            </IconButton>
            <Drawer
            open={isDrawerOpen}
            onClose={()=>setIsDrawerOpen(false)}
          >
            <List sx={{ width: '17rem', fontSize: '2rem'}}>
                <Box textAlign='center'>
                    <Box sx={{padding: '1rem', fontWeight: 'bolder'}}>
                        Lists
                    </Box>
                </Box>
                <Divider />
                <CardActionArea>
                    <Link to="/automobiles">
                    <Box p={2} sx={{fontSize: '1rem'}}  onClick={()=>setIsDrawerOpen(false)}>
                        <IconButton>
                            <CommuteIcon />
                        </IconButton>
                        Automotive
                    </Box>
                    </Link>
                </CardActionArea>
                <CardActionArea>
                    <Link to="/restraunts">
                    <Box p={2} sx={{fontSize: '1rem'}} onClick={()=>setIsDrawerOpen(false)}>
                    <IconButton>
                            <LuggageIcon />
                        </IconButton>
                        Restraunt
                    </Box>
                    </Link>
                </CardActionArea>
                <CardActionArea>
                    <Link to="/shopping">
                    <Box p={2} sx={{fontSize: '1rem'}} onClick={()=>setIsDrawerOpen(false)}>
                    <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                        Shopping
                    </Box>
                    </Link>
                </CardActionArea>
                <CardActionArea>
                    <Link to="/hotelTravel">
                    <Box p={2} sx={{fontSize: '1rem'}} onClick={()=>setIsDrawerOpen(false)}>
                    <IconButton>
                            <ModeOfTravelIcon />
                        </IconButton>
                        Hotels and Travel
                    </Box>
                    </Link>
                </CardActionArea>
                <CardActionArea>
                        <Link to="/education">
                    <Box p={2} sx={{fontSize: '1rem'}} onClick={()=>setIsDrawerOpen(false)}>
                    <IconButton>
                            <SchoolIcon />
                        </IconButton>
                        Education
                    </Box>
                    </Link>
                </CardActionArea>
                <CardActionArea>
                    <Link to="/hospital">
                    <Box p={2} sx={{fontSize: '1rem'}} onClick={()=>setIsDrawerOpen(false)}>
                    <IconButton>
                            <HealthAndSafetyIcon />
                        </IconButton>
                        Health and Medicine
                    </Box>
                    </Link>
                </CardActionArea>
            </List>
          </Drawer>
        </>
    )
}

export default LeftDrawer