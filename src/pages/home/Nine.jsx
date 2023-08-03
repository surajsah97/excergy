// import React from 'react';
import {Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imagen from '../../assets/imagen.jpg'
// import exergylogo from '../../assets/exergylogo.png'

const styles = {
  container: {
    background: `url(${imagen})`,
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

const Nine = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>

        {/* CROWD MANAGEMENT SOLUTIONS */}
      <div >
      <Link to="/crowdmanagement" >
        <h2 >CROWD MANAGEMENT<br/> SOLUTIONS</h2></Link>
        <p >        We specialize in providing advanced Crowd<br/>
Management Solutions to help event organizers,<br/>
stadium operators, and public safety agencies ensure<br/>
the safety and security of crowds. Our solutions help<br/>
our clients identify potential crowd-related risks, such<br/>
as overcrowding, stampedes, and security threats, and<br/>
respond proactively to mitigate these risks.<br/>
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
     
      </Box>
    </Box>
  );
};

export default Nine;
