import { CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const CardItem = (props) => {

    const navigate = useNavigate();

    const LocationHandler = () => {
        navigate("/detailed-section", {state:{name: props.name, location: props.location, rating: props.rating, comments: props.comments, description: props.description, img: props.img}})
    }

    return (
        <>
            <Grid onClick={LocationHandler} item sx={{ margin: 'auto', marginTop: '3rem' }}>

                <CardActionArea sx={{ minHeight: '22rem', height: 'fit-content', width: '20rem', border: '1px solid rgb(223, 223, 223)', borderRadius: '4px' }}>
                    <CardMedia component="img"
                        alt="Image"
                        height="150"
                        image={props.img}
                        />
                    <CardContent>
                        <Typography gutterBottom component="div" sx={{color: 'white', fontSize: '1.7rem'}}>
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <i key={Math.random()} className="fa fa-star checked" style={{ color: 'orange', fontSize: '25px' }}></i> {props.rating}
                        </Typography>
                        <Typography  color="text.secondary" sx={{fontSize: '1.2rem'}}>
                            {props.location}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Grid>
        </>
    )
}

export default CardItem;