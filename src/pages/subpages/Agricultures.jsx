// import React from 'react';
import { Box } from '@mui/material';
import Agriculture from '../../assets/Agriculture.jpg';
// import A from '../../assets/A.png'; // Replace with the actual path to your image
// import exergylogo from '../../assets/exergylogo.png'; // Replace with the actual path to your logo image

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
    margin: '0',
  },
  image: {
    width: '100%',
    height: 'auto',
    zIndex: -10,

  },
  paragraphBox: {
    position: 'absolute',
    width: 'auto',
    padding: '10px',
    color: 'black',
    margin: '20px',
    fontFamily: 'Jost,',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '1.6', // Add line spacing
    
  },
  heading: {
      fontWeight: 500,
      fontFamily: 'Jost, sans-serif', // Use Jost font for headings
      marginBottom: '5px',
      // textAlign: 'center',
    },
 
};
const Agricultures = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
      <div style={styles.menuIconContainer}>
          <div style={styles.menuIcon}>
            <div style={styles.menuLine}></div>
            <div style={{ ...styles.menuLine, backgroundColor: '#FF007F' , marginBottom:'8px', marginTop:'8px'}}></div>
            <div style={styles.menuLine}></div>
          </div>
        </div>
        <div style={styles.logoContainer}>
        <img src={Agriculture} alt="Your Image" style={styles.image} />

           {/* <img src={exergylogo} alt="Logo" style={styles.exergylogo} /> */}
        </div>
        
        {/* BUILDING AUTOMATION SOLUTIONS */}
        <div style={{ ...styles.paragraphBox, top: '4738px', right: '50px', marginBottom: '20px' }}>
        <h2 style={styles.heading}>AGRICULTURE</h2>
        <p style={{fontSize:'1.3rem', lineHeight:'1.6', textAlign: 'justify' }}>
        Exergy Solutions revolutionizes the agricultural sector with our <br />
          technology-driven GIS and remote sensing solutions. We deploy <br /> satellite
          imagery, aerial drones, and loT sensors to capture high<br />-resolution data on 
          crop health, vegetation indices, and soil<br /> characteristics. Our advanced 
          analytics and machine learning<br /> algorithms enable precise yield prediction, 
          pest and disease<br /> detection, and optimized resource allocation for precision <br />
          farming. By integrating weather data, soil moisture monitoring, <br />and 
          geospatial insights, we empower farmers and agribusinesses <br /> to enhance
          productivity, minimize environmental impact, and drive<br /> sustainable 
          agricultural practices.
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
     
      </Box>
    </Box>
  );
};
export default Agricultures;
