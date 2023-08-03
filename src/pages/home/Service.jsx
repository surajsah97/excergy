// import React from 'react';
import {Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imaget from '../../assets/imaget.jpg'
// import Logo from '../../assets/Logo.png'

const styles = {
  container: {
    background: `url(${imaget})`,
    backgroundSize: 'cover',
  },
  content: {
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // padding: '60px',
    // borderRadius: '8px',
    // maxWidth: '60%',
    // border:'5px black solid'
  },
  heading: {
      // fontWeight: 500,
      // fontFamily: 'Jost, sans-serif', // Use Jost font for headings
      // marginBottom: '5px',
      // fontSize:'1.7rem'
      // textAlign: 'center',
    },
 unorderedList : {
    // listStyleType: 'none', // Remove bullet points from list items
    // padding: '0', // Remove default padding
  },
  listItem: {
    // marginBottom: '30px', // Add margin between list items
  },
};

const Service = () => {
  return (
    <Box sx={styles.container} className="min-h-100 flex items-center justify-end h-100v">
      <Box sx={styles.content} className="flex flex-col p-6 justify-around h-100v">
        {/* Right side paragraphs */}
        {/* <div > */}
          <div className="m-1">
            <h2 >OUR SERVICES</h2>
            <h4 >POWER THAT LEAD US</h4>
          </div>
          <ul >
            <Link to="/agriculture">
              <li>Assessments & Examination Services</li>
            </Link>
            <li >Live CCTV Surveillance</li>
            <li >Biometric Verification</li>
            <li >Facial Recognition</li>
            <Link to="/cloudservice">
              <li >IT/ITES Services</li>
            </Link>
            <li>Digital Marketing</li>
            <Link to="/systemintegration">
              <li >System Integration Services</li>
            </Link>
            <Link to="/geological">
              <li >Geospatial Services & Solutions</li>
            </Link>
          </ul>
        {/* </div> */}
        {/* Add more right side paragraphs with headings and content as needed */}

      </Box>
    </Box>
  );
};

export default Service;
