import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Body/Footer/Footer';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import IndividualListPage from './Components/IndividualListPage/IndividualListPage';
import { useEffect, useState } from 'react';
import axios from 'axios'
import DetailedSection from './Components/IndividualListPage/IndividualLists/DetailedSection';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {

  const [automobile, setAutomobile] = useState([]);
  const [restraunts, setRestraunts] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [hotelTravel, setHotelTravel] = useState([]);
  const [education, setEducation] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [carouseValue, setCarouselValue] = useState();

  const automobileHeading = 'Drive Your Dreams with Us';
  const restrauntHeading = 'Satisfy Your Cravings with Some of the best Services';
  const shoppingHeading = 'Shop Smart, Shop Happy';
  const hotelTravelHeading = 'Discover Your Next Adventure';
  const educationHeading = 'Learn. Grow. Succeed';
  const healthHeading = `Your Health Matters - Let's Take Care of It!`;

  const autoImg = "https://automotiveforbeginners.com/wp-content/uploads/2021/08/auto-shop-near-me-best-mechanic-repair-how-to-find-a-good-reliable-mobile-garage-825x510.jpg"
  const shopImg = "https://www.karnataka.com/wp-content/uploads/2013/12/garuda-mall.jpg"
  const restrImg = "https://im.whatshot.in/img/2021/Mar/luxury-is-5-1615534755.jpg"
  const eduImg = "https://thedailyguardian.com/wp-content/uploads/2023/04/hiher.jpg"
  const hotelImg = "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
  const healthImg = "https://ehealth.eletsonline.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg"


  useEffect(()=> {
    axios.get("https://rohan749.github.io/desi-directory-api/directory_api.json")
    .then((response) => { 
      setAutomobile(response.data.automotives) 
      setRestraunts(response.data.restraunt)
      setShopping(response.data.shopping)
      setHotelTravel(response.data.hotels_travel)
      setEducation(response.data.education)    
      setHospital(response.data.hospital)
      setCarouselValue(response.data)
    })
    .catch(error => alert(error))
  }, [])
  

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Body fetchedData={carouseValue}/>} />
          <Route path="/automobiles" element={<IndividualListPage img={autoImg} heading={automobileHeading} fetchedData={automobile} />} />
          <Route path="/restraunts" element={<IndividualListPage img={restrImg} heading={restrauntHeading} fetchedData={restraunts} />} />
          <Route path="/shopping" element={<IndividualListPage img={shopImg} heading={shoppingHeading} fetchedData={shopping} />} />
          <Route path="/hotelTravel" element={<IndividualListPage img={hotelImg} heading={hotelTravelHeading} fetchedData={hotelTravel} />} />
          <Route path="/education" element={<IndividualListPage img={eduImg} heading={educationHeading} fetchedData={education} />} />
          <Route path="/hospital" element={<IndividualListPage img={healthImg} heading={healthHeading} fetchedData={hospital} />} />
          <Route path="/detailed-section" element={<DetailedSection  />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </ThemeProvider>      
    </>
  );
}

export default App;
