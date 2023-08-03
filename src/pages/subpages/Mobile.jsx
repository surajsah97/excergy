// import React from 'react';
import MobileApplicationDevelopment from '../../assets/MobileApplicationDevelopment.jpg'
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
      fontSize:'2rem',
      fontFamily: 'Jost, sans-serif', // Use Jost font for headings
      marginBottom: '5px',
      // textAlign: 'center',
    },
    zIndex: -10,

};

const Mobile = () => {
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
      <img src={MobileApplicationDevelopment} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>MOBILE APPLICATION DEVELOPMENT</h3>
        <div style={styles.h6} className="textContainer">
        
        
Exergy Solutions specializes in mobile application development,<br/>
delivering innovative and feature-rich apps for iOS and Android<br/>
platforms. Our team of experienced developers employs advanced<br/>
technologies and agile development methodologies to create<br/>
intuitive and engaging mobile applications. We work closely with<br/>
clients to understand their requirements and transform their ideas<br/>
into reality. From concept design and development to testing and<br/>
deployment, we ensure that your mobile app is optimized for<br/>
performance, usability, and security. Whether it is a consumer-facing<br/>
app or an enterprise solution, we are committed to delivering mobile<br/>
applications that drive business growth and user satisfaction.
      </div>
      </div>
    </div>
  );
};

export default Mobile;
