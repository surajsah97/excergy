// import React from 'react';
import PostExaminationServices from '../../assets/PostExaminationServices.png'
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

const Postexam = () => {
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
      <img src={PostExaminationServices} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>POST EXAMINATION SERVICES</h3>
        <div style={styles.h6} className="textContainer">

Exergy Solutions is your trusted partner for end-to-end IT/ITES <br/>
solutions that enable digital transformation. Our experienced<br/>
 professionals specialize in custom software development, utilizing<br/>
  agile methodologies and emerging technologies such as Al, machine learning, <br/>
  and blockchain. We offer comprehensive application management services, including<br/>
   application maintenance, performance optimization, and security enhancements. <br/>
   Our data analytics solutions enable organizations to harness the potential of big<br/>
    data, leveraging advanced analytics, data visualization, and predictive modeling. <br/>
    With expertise in cloud computing, DevOps, and IT infrastructure management, we<br/>
     ensure scalable, secure, and resilient IT environments. 

      </div>
      </div>
    </div>
  );
};

export default Postexam;
