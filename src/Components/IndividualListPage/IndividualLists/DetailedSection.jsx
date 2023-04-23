import { Box, Button, Container, Divider, ImageList, Paper, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const DetailedSection = () => {

    const location = useLocation();
    const commentator = useRef();
    const commentValue = useRef();
    const [commentSection, setCommentSection] = useState(location.state.comments);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const CommentSubmitHandler = (event) => {
        event.preventDefault();
        const newComment = {
            name: commentator.current.value,
            comment: commentValue.current.value
        }

        setCommentSection(prevComment => [newComment, ...prevComment]);
        commentator.current.value = "";
        commentValue.current.value = "";
    }



    return (
        <Container data-aos="fade-up" data-aos-delay='100' sx={{ marginTop: '6rem', color: 'white', marginBottom: '1rem', padding: '1rem', backgroundColor: 'rgb(50, 50, 50, 0.2)', minHeight: '40vw', height: 'fit-content' }}>
            <Typography data-aos="fade-zoom-out" data-aos-delay='400' sx={{ display: 'flex' }}>
                <ImageList sx={{width: {xs: '10rem', md: '15rem', lg: '20rem'}, height: {xs: '10rem', md: '15rem', lg: '20rem'}}}>
                    <img src={location.state.img}/>
                </ImageList>
                <Typography sx={{ padding: '1rem 2rem' }}>
                    <Typography sx={{ fontSize: {xs: '1.5rem', md:'2.5rem'} }} gutterBottom>{location.state.name}</Typography>
                    <Typography sx={{ fontSize: {xs: '1rem', md:'1.4rem'}, fontWeight: 'bold' }}>Rating: {location.state.rating}</Typography>
                    <Typography sx={{ fontSize: {xs: '1rem', md:'1.4rem'}, color: 'rgb(153, 255, 0)' }}>Open</Typography>
                    <Typography sx={{ fontSize: {xs: '1rem', md:'1.4rem'} }}>{location.state.location}</Typography>
                </Typography>
            </Typography>
            <Typography sx={{ display: {xs:'block', lg:'flex'}, margin: '2rem 0', justifyContent: 'space-between' }}>
                <Typography data-aos="fade-zoom-out" data-aos-delay='700'>
                    <Typography sx={{ fontSize: {xs:'1.5rem',lg:'2.5rem'}, fontWeight: 'bold' }}>About this Business: {location.state.name}</Typography>
                    <Typography sx={{ fontSize: {xs:'1rem',lg:'1.3rem'} }}>
                        {location.state.description}
                    </Typography>
                </Typography>
                <Paper data-aos="fade-up" data-aos-delay='1000' sx={{ minWidth: {xs:'17rem', lg:'30rem'}, minHeight: '5rem', margin: '1rem 2rem', backgroundColor: 'rgb(50, 50, 50, 0.1)', padding: '5px 10px' }}>
                    <Typography sx={{ fontSize: {xs:'1.5rem', lg:'2.5rem'} }} textAlign='center'>Comments</Typography>
                    <Divider /> 
                    <form onSubmit={CommentSubmitHandler}>
                        <Box sx={{ display: 'flex', flexDirection: "column" }}>
                            <input ref={commentator} type='text' placeholder='Enter your name' />
                            <textarea ref={commentValue} type="text" placeholder='Add a comment' />
                            <Box sx={{display: 'flex', justifyContent:'right', alignItems:'center'}}>
                            <Button variant='contained' sx={{color: 'white', fontWeight: 'bolder', backgroundColor: '#009ffd', margin: '10px'}} type='submit'>Add</Button>
                            </Box>
                        </Box>
                    </form>
                    {commentSection.map((comment) => {
                        return (
                            <Typography key={Math.random()} sx={{ padding: '5px 10px', backgroundColor: 'transparent' }}>
                                <Typography sx={{ fontSize: '20px' }}>"{comment.comment}"</Typography>
                                <Typography sx={{ fontSize: '15px', textAlign: 'right' }}>- {comment.name}</Typography>
                            </Typography>
                        )
                    })}
                </Paper>
            </Typography>
        </Container>
    )
}

export default DetailedSection