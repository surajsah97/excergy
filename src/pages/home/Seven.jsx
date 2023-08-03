// import React from 'react';
import {Box } from '@mui/material';
import images from '../../assets/images.jpg'
// import exergylogo from '../../assets/exergylogo.png'

const styles = {
  container: {
    background: `url(${images})`,
    backgroundColor:'black',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-end',
    padding: '20px',
    width: '100%',
    color:'white'
  },
  content: {
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '60px',
    borderRadius: '8px',
    maxWidth: '60%',
    // border:'5px black solid'
  },
  heading: {
      fontWeight: 500,
      fontFamily: 'Jost, sans-serif', // Use Jost font for headings
      marginBottom: '5px',
      fontSize:'2.2rem'
      // textAlign: 'center',
    },
};

const Seven = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>

        {/* BUILDING AUTOMATION SOLUTIONS */}
        <div >
        <h2 >BUILDING AUTOMATION <br/>SOLUTIONS</h2>
        <p> 
        Our cutting-edge technology and state-of-the-art<br/>
systems allow for centralized control of various<br/>
building systems such as HVAC, Lighting, Fire<br/>
Detection, Access control and CCTV. Our smart<br/>
solutions help save energy, reduce operational<br/>
costs, and enhance occupant comfort and safety.
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
     
      </Box>
    </Box>
  );
};

export default Seven;
