// import React from 'react';
import PreExaminationService from '../../assets/PreExaminationService.jpg'
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

const Preexam = () => {
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
      <img src={PreExaminationService} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>PRE-EXAMINATION SERVICE</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions excels in pre-examination services, empowering<br/>
examination bodies to focus on core activities and ensuring a seamless<br/>
and transparent examination experience.
<h5>Online Candidate Enrollment</h5>
Exergy Solutions offers an advanced pre-examination service that<br/>
facilitates candidate enrollment through cutting-edge online platforms.<br/>
Our technology-driven solutions provide seamless and secure<br/>
registration processes, utilizing robust encryption algorithms and<br/>
biometric authentication. With our scalable and user-friendly interfaces,<br/>
candidates can conveniently submit their applications, upload supporting<br/>
documents, and make online fee payments. Our advanced data<br/>
management systems ensure data integrity, streamlined workflows,<br/>
and efficient processing, empowering examination bodies to handle<br/>
large-scale candidate enrollments with ease.
      </div>
      </div>
    </div>
  );
};

export default Preexam;
