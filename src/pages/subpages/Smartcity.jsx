// import React from 'react';
import SmartCitySolutions from "../../assets/SmartCitySolutions.jpg"
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

const Smartcity = () => {
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
      <img src={SmartCitySolutions} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                 <h3 style={styles.h3}> SMART CITY SOLUTIONS</h3>
        <div style={styles.h6} className="textContainer">
       
With our Smart City Solutions, we pave the way for intelligent urban<br/>
 development and enhanced quality of life. By integrating advanced<br/>
  technologies, data analytics, and lot connectivity, we enable cities<br/>
   to become more efficient, sustainable, and livable. Our solutions cover <br/>
   areas such as smart transportation, intelligent infrastructure, environmental<br/>
    monitoring, public safety, and citizen engagement. Through seamless integration <br/>
    of systems, data-driven insights, and real-time monitoring, we empower cities to<br/>
     make informed decisions, streamline operations, and improve the overall well-being<br/>
      of their residents.
      </div>
      </div>
    </div>
  );
};

export default Smartcity;
