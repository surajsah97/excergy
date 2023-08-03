// import React from 'react';
import WebDevelopment from '../../assets/WebDevelopment.jpg'
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

const Webdevelopment = () => {
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
      <img src={WebDevelopment} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>WEB DEVELOPMENT</h3>
        <div style={styles.h3}>
        
At Exergy Solutions, we offer top-notch web development services<br/>
 tailored to meet the unique needs of businesses. Our team<br/> of skilled
 to developers utilizes the latest technologies and <br/> industry best practices
  create high-performance and visually <br/>appealing websites. From  
  responsive design and user-friendly<br/> interfaces to seamless navigation
  and robust functionality,<br/> we ensure that your website stands out in the
  digital landscape. <br/>Whether you need a corporate website,
  an e-commerce platform,<br/> or a custom web application, our  expertise
  in web development<br/> ensures a compelling online presence for your business.
      </div>
      </div>
    </div>
  );
};

export default Webdevelopment;
