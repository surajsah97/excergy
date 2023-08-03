// import React from 'react';
import LandManagement from '../../assets/LandManagement.jpg'
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
    zIndex: -10,

};

const Land = () => {
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
      <img src={LandManagement} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>LAND MANAGEMENT</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions provides technology-driven land management solutions,<br/>
utilizing advanced GIS, cadastral mapping, and land administration<br/>
systems. We employ sophisticated data integration techniques, Al-driven<br/>
analytics, and blockchain technology to streamline land use/land cover<br/>
mapping, land parcel management, and spatial planning. Our solutions<br/>
facilitate transparent and efficient land governance, support land titling<br/>
initiatives, and enable informed decision-making for sustainable land<br/>
management practices. With our technology-driven approach, we<br/>
empower governments, land agencies, and real estate developers to<br/>
optimize land resources and ensure equitable land distribution.
      </div>
      </div>
    </div>
  );
};

export default Land;
