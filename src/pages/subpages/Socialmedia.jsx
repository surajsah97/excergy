// import React from 'react';
import SocialMediaMonitoring from '../../assets/SocialMediaMonitoring.png'
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
    zIndex: -10,

};

const Socialmedia = () => {
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
      <img src={SocialMediaMonitoring} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>SOCIAL MEDIA MONITORING</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions offers comprehensive social media monitoring <br/>
services to help businesses gain valuable insights into their online <br/>
presence. Our advanced monitoring tools track and analyze social<br/>
 media platforms, allowing you to monitor brand mentions, customer<br/> feedback,
  and industry trends. By understanding the sentiment <br/>and engagement surrounding
   your brand, you can make data-driven<br/> decisions and respond effectively to customer needs.
    Our social media<br/> monitoring services empower you to stay ahead of the competition,<br/>
     strengthen your brand reputation, and engage with your target <br/> audience in real time. 

      </div>
      </div>
    </div>
  );
};

export default Socialmedia;
