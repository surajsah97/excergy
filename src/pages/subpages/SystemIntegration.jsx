// import React from 'react';
import Systemintegration from '../../assets/Systemintegration.jpg'
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

const SystemIntegration = () => {
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
      <img src={Systemintegration} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>SYSTEM INTEGRATION</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions excels in seamless system integration, consolidating <br/>
disparate IT components into cohesive architectures. Our team<br/>
 possesses deep expertise in enterprise integration frameworks,<br/>
  API management, and microservices architectures. We design and <br/>
  deploy robust network infrastructure, leveraging state-of-the-art<br/>
   technologies such as SD-WAN and software-defined networking. Our<br/>
    data migration services ensure a smooth and secure transition between<br/>
     legacy and modern systems. With our system integration solutions,<br/>
      organizations achieve optimized operational efficiency, enhanced data<br/>
       flow, and improved collaboration across the enterprise.
      </div>
      </div>
    </div>
  );
};

export default SystemIntegration;
