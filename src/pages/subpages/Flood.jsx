// import React from 'react';
import FloodVulnerabilityHazardZonationMapping from '../../assets/FloodVulnerabilityHazardZonationMapping.jpg'
// import exergylogo from '../../assets/exergylogo.jpg'; // Replace with the actual path to your logo image


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
    color: 'white',
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
    zIndex: -10,

};

const Flood = () => {
  return (
    <div style={styles.container}>
      <div style={styles.menuIconContainer}>
        <div style={styles.menuIcon}>
          <div style={styles.menuLine}></div>
          <div style={{ ...styles.menuLine, backgroundColor: '#FF007F' , marginBottom:'8px', marginTop:'8px'}}></div>
          <div style={styles.menuLine}></div>
        </div>
      </div>
      <div style={styles.logoContainer}>
        {/* <img src={exergylogo} alt="Logo" style={styles.exergylogo} /> */}
      </div>    
      <img src={FloodVulnerabilityHazardZonationMapping} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>FLOOD VULNERABILITY & <br/>HAZARD ZONATION MAPPING</h3>
        <div style={styles.h6}>
        
Exergy Solutions leverages advanced geospatial technologies and <br/>
Hhydrological modeling to assess flood vulnerability and map hazard zones.<br/>
 Our team integrates high-resolution elevation data, rainfall patterns, and<br/>
  hydraulic modeling to simulate flood scenarios and predict flood risks.<br/>
   By applying advanced GIS analytics, we generate accurate flood hazard maps, <br/>
   enabling governments, disaster management agencies, and insurance companies to<br/>
    develop robust emergency response plans and implement effective flood risk <br/>
    mitigation strategies. Our technology-driven solutions foster resilient communities <br/>
    and enhance flood management capabilities.
      </div>
      </div>
    </div>
  );
};

export default Flood;
