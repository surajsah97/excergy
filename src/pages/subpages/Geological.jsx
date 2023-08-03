// import React from 'react';
import GeologicalMineralPotentialMapping from '../../assets/GeologicalMineralPotentialMapping.jpg'
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
  
};

const Geological = () => {
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
      <img src={GeologicalMineralPotentialMapping} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>GEOLOGICAL &<br/>
MINERAL POTENTIAL MAPPING</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions utilizes cutting-edge geospatial technologies and<br/>
 machine learning algorithms for geological and mineral potential <br/>
 mapping. By integrating multispectral satellite imagery, geophysical data,<br/>
  and geological surveys, we identify areas of geological interest and assess<br/>
   mineral resource potential. Our advanced analytics enable predictive modeling,<br/>
    target selection, and mineral prospectivity analysis, supporting mining companies,<br/>
     geologists, and government agencies in efficient exploration planning and resource<br/>
      management. With our technology-driven solutions, we optimize mineral resource<br/>
       discovery, reduce exploration costs, and facilitate responsible mining practices.
      </div>
      </div>
    </div>
  );
};

export default Geological;
