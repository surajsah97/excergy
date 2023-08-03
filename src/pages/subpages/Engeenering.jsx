// import React from 'react';
// import { EngineeringandInfrastructureg } from '@mui/icons-material';
import EngineeringandInfrastructure from '../../assets/EngineeringandInfrastructure.jpg'
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

const EngineeringandInfrastructureg = () => {
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
      <img src={EngineeringandInfrastructure} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>ENGINEERING & INFRASTRUCTURE</h3>
        <div style={styles.h6} className="textContainer">
        
       
Exergy Solutions leads the way in providing technology-driven geospatial<br/>
solutions for engineering and infrastructure projects. Leveraging advanced<br/>
GIS tools, LIDAR technology, and 3D modeling, our experts perform site<br/>
selection analysis, optimal route planning, and infrastructure visualization.<br/>
We employ advanced algorithms to assess terrain characteristics, detect<br/>
obstacles, and optimize resource allocation for efficient infrastructure<br/>
development. By integrating geospatial data with BIM (Building Information<br/>
Modeling) and asset management systems, we enable digital twins, smart<br/>
city planning, and seamless integration of engineering workflows.
      </div>
      </div>
    </div>
  );
};

export default EngineeringandInfrastructureg;
