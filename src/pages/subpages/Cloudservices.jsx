// import React from 'react';
import CloudService from '../../assets/CloudService.jpg'
// import exergylogo from '../../assets/exergylogo.png'; // Replace with the actual path to your logo image


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

const Cloudservices = () => {
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
      {/* Replace "path_to_your_image.jpg" with the actual path to your image */}
      <img src={CloudService} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>CLOUD SERVICE</h3>
        <div style={styles.h6} className="textContainer">

Exergy Solutions provides comprehensive cloud services to help<br/>
 businesses leverage the advantages of the cloud for enhanced<br/>
  scalability, flexibility, and cost-efficiency. Our experts assist in<br/>
   selecting the appropriate cloud infrastructure, whether public, private,<br/>
    or hybrid, based on your specific needs. We handle the entire cloud <br/>
    migration process, ensuring a smooth transition and minimal disruption<br/>
     to your operations. Our cloud services encompass infrastructure setup, <br/>
     data migration, application deployment, and on- going management and support.<br/> 
     With our robust cloud solutions, you can harness the benefits of scalability,<br/>
      data accessibility, and disaster recovery while focusing on your <br/>
      core business objectives.
      </div>
        {/* <h1 style={styles.h1}>POWER THAT LEAD US</h1> */}
        <ul style={styles.ul}>
          {/* <li style={styles.li}>Web Application Development</li>
          <li style={styles.li}>Mobile Application Development</li>
          <li style={styles.li}>Cloud Services</li> */}
          

        </ul>
      </div>
    </div>
  );
};

export default Cloudservices;
