// import React from 'react';
import Sociallistening from '../../assets/Sociallistening.jpg'
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

const SocialListining = () => {
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
      <img src={Sociallistening} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>SOCIAL LISTENING</h3>
        <div style={styles.h6} className="textContainer">
        
At Exergy Solutions, we provide powerful social listening services that <br/>
go beyond monitoring social media channels. Our team utilizes<br/>
 advanced listening tools and techniques to capture conversations and<br/>
  sentiments related to your brand, industry, and competitors.<br/>
By tapping into social media conversations, forums, blogs, and online <br/>communities,
 we help you uncover valuable insights, identify emerging<br/> trends, and 
 understand customer preferences.<br/><br/><br/>

This deep understanding of your target audience allows you to refine<br/>
 your marketing strategies, enhance customer engagement, and build<br/>
  meaningful relationships. 
      </div>
      </div>
    </div>
  );
};

export default SocialListining;
