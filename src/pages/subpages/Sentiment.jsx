// import React from 'react';
import SentimentAnalysis from '../../assets/SentimentAnalysis.png'
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

const Sentiment = () => {
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
      <img src={SentimentAnalysis} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>SENTIMENT ANALYSIS</h3>
        <div style={styles.h6} className="textContainer">
        
Harnessing the power of sentiment analysis, Exergy Solutions helps <br/>
you understand how your brand is perceived in the digital sphere.<br/>
 Our sentiment analysis services employ advanced algorithms to analyze <br/>
 social media conversations, customer reviews, and online feedback. <br/>
 By evaluating sentiment patterns, we uncover positive, negative, and neutral<br/>
  sentiments associated with your brand, products, or services. This invaluable<br/>
   data provides actionable insights for refining your marketing strategies, <br/>
   enhancing customer satisfaction, and addressing potential issues proactively.
      </div>
      </div>
    </div>
  );
};

export default Sentiment;
