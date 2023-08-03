// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'; // Import your global CSS file here

// ReactDOM.render(<App />, document.getElementById('root'));

import './App.css'

import Agricultures from './pages/subpages/Agricultures';
import Homemain from './pages/home/Homemain';
import BuildingManage from './pages/subpages/BuildingManage';
import Changedetection from "./pages/subpages/ChangeDetection";
import Cloudservices from "./pages/subpages/Cloudservices";
import Contentmarketing from "./pages/subpages/Contentmarketing";
import Crowdmanagement from "./pages/subpages/Crowdmanagement";
import Digitalmarketing from "./pages/subpages/Digitalmarketing";
import { Engineering } from "@mui/icons-material";
import Examination from "./pages/subpages/Examination";
import Land from "./pages/subpages/Land";
import Mobile from "./pages/subpages/Mobile";
import Postexam from "./pages/subpages/Postexam";
import Preexam from "./pages/subpages/Preexam";
import Sentiment from "./pages/subpages/Sentiment";
import Smartcity from "./pages/subpages/Smartcity";
import SocialListining from "./pages/subpages/SocialListining";
import Socialmedia from "./pages/subpages/Socialmedia";
import SystemIntegration from "./pages/subpages/SystemIntegration";
import Webdevelopment from "./pages/subpages/Webdevelopment";
import Flood from "./pages/subpages/Flood";
import Geological from "./pages/subpages/Geological";
import GIS from "./pages/subpages/GIS";
// import Navbar from "./pages/components/Navbar";
import Nav from './pages/components/Nav'
import Footer from "./pages/components/Footer";

function App() {
  return (
    <>
      <div>
        
        <Router>
          <Nav />
          <Routes>
          
              <Route path='/' element={<Homemain/>} />
              <Route path="/agriculture" element={<Agricultures/>} />
              <Route path="/buildingmanage" element={<BuildingManage/>} />
              <Route path="/changedetection" element={<Changedetection/>} />
              <Route path="/cloudservice" element={<Cloudservices/>} />
              <Route path="/contentmarketing" element={<Contentmarketing/>} />
              <Route path="/crowdmanagement" element={<Crowdmanagement/>} />
              <Route path="/digitalmarketing" element={<Digitalmarketing/>} />
              <Route path="/engeenering" element={<Engineering/>} />
              <Route path="/examination" element={<Examination/>} />
              <Route path="/land" element={<Land/>} />
              <Route path="/mobile" element={<Mobile/>} />
              <Route path="/postexam" element={<Postexam/>} />
              <Route path="/preexam" element={<Preexam/>} />
              <Route path="/sentiment" element={<Sentiment/>} />
              <Route path="/smartcity" element={<Smartcity/>} />
              <Route path="/sociallistining" element={<SocialListining/>} />
              <Route path="/socialmedia" element={<Socialmedia/>} />
              <Route path="/systemintegration" element={<SystemIntegration/>} />
              <Route path="/webdevelopment" element={<Webdevelopment/>} />
              <Route path="/flood" element={<Flood/>} />
              <Route path="/geological" element={<Geological/>} />
              <Route path="/gis" element={<GIS/>} /> 
              {/* <Route path="/new" element={<New/>} /> */}
              {/* <Route path="/ancillarys" element={<Ancillarys/>} /> */}

          </Routes>
        </Router>
        <Footer/>
        </div>
    </>
  )
}

export default App
