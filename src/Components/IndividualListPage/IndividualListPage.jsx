import { Box, Checkbox, Container, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardItem from '../Body/Cards/CardItem'
import AOS from "aos";
import "aos/dist/aos.css";

const IndividualListPage = (props) => {

    const [searchName, setSearchName] = useState("")
    const [locationChange, setLocationChange] = useState("");
    const [nearMeChecked, setNearMeChecked] = useState(false);
    const [sortChecked, setSortChecked] = useState(false);
    const [arrayValue, setArrayValue] = useState([]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        let filteredData = props.fetchedData.filter((data) => {
            if (searchName === "") {
                return data
            }

            else if (data.name.toLowerCase().includes(searchName.toLowerCase())) {
                return data
            }
        })

        if (locationChange !== "") {
            filteredData = filteredData.filter((data) => {
                if (data.location.includes(locationChange)) {
                    return data;
                }
            })
        }

        if (nearMeChecked) {
            filteredData = filteredData.filter((data) => {
                if (data.location.includes("Koramangala")) {
                    return data;
                }
            })
        }

        if (sortChecked) {
            filteredData.sort((b, a) => b.rating - a.rating).reverse()
        }

        setArrayValue(filteredData.map((data) => {
            return <CardItem
                key={data.name}
                name={data.name}
                description={data.description}
                rating={data.rating}
                location={data.location}
                comments={data.comments}
                data={data}
                img={props.img}
            />
        }))

    }, [props.fetchedData, props.img, searchName, locationChange, nearMeChecked, sortChecked])




    return (
        <>
            <Container sx={{ backgroundColor: 'rgb(50, 50, 50, 0.2)', boxShadow: '0px 0px 30px 7px black', borderRadius: '10px', marginTop: '6rem', marginBottom: '2rem', paddingBottom: '2rem', minHeight: '100vh', height: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box data-aos="fade-up" data-aos-delay='200' sx={{ margin: '2rem', fontSize: { xs: '2rem', lg: '3rem' }, color: 'white', textAlign: 'center' }}>
                        {props.heading}
                    </Box>
                    <Typography data-aos="fade-zoom-out" data-aos-delay='500' sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                        <TextField label="search name" sx={{ m: 1, minWidth: '10rem', fontWeight: 'bolder' }} value={searchName} onChange={(e) => { setSearchName(e.target.value) }} />
                        <Typography>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: '15rem' }}>
                                <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={locationChange}
                                    onChange={(e) => { setLocationChange(e.target.value) }}
                                    label="Location"
                                >
                                    <MenuItem value="">
                                        <em>Show All</em>
                                    </MenuItem>
                                    <MenuItem value={"Koramangala"}>Koramangala</MenuItem>
                                    <MenuItem value={"Jayanagar"}>Jayanagar</MenuItem>
                                    <MenuItem value={"Indiranagar"}>Indiranagar</MenuItem>
                                    <MenuItem value={"Whitefield"}>Whitefield</MenuItem>
                                    <MenuItem value={"JP Nagar"}>JP Nagar</MenuItem>
                                    <MenuItem value={"Malleshwaram"}>Malleshwaram</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Typography>
                    <Typography data-aos="fade-zoom-out" data-aos-delay='700' gutterBottom sx={{ minWidth: 400 }}>
                        <FormControl sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <FormControlLabel control={<Checkbox onChange={(e) => { setNearMeChecked(!nearMeChecked) }} />} label="Find places Near me" />
                            <FormControlLabel control={<Checkbox onChange={(e) => { setSortChecked(!sortChecked) }} />} label="Sort by Rating" />
                        </FormControl>
                    </Typography>
                <Divider />

                {/* Card Itemssss */}

                    <Grid data-aos="fade-zoom-out" data-aos-delay='900' container sx={{ marginTop: '3rem' }}>
                        {arrayValue}
                    </Grid>

            </Container>
        </>
    )
}

export default IndividualListPage;