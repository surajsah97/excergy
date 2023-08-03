// import React from 'react';
import CrowdManagement from '../../assets/CrowdManagement.jpg'
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

const Crowdmanagement = () => {
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
      <img src={CrowdManagement} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>CONTENT MARKETING</h3>
        <div style={styles.h6} className="textContainer">
        
Exergy Solutions excels in content marketing, creating compelling and <br/>
engaging content that resonates with your target audience. Our team <br/>
of content specialists develops high-quality content strategies tailored<br/>
 to your business objectives and target market. Through well-crafted blog posts,<br/>
  articles, videos, infographics, and more, we aim to educate, inform, and<br/>
   entertain your audience while establishing your brand as a trusted authority.<br/>
    Our content marketing services drive website traffic, increase brand awareness, <br/>
    and generate leads, enabling you to build a strong online presence and<br/>
     nurture long-term customer relationships.
      </div>
      </div>
    </div>
  );
};

export default Crowdmanagement;
