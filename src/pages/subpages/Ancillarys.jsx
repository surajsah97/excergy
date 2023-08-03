// import React from 'react';
import Ancillary from '../../assets/Ancillary.png';
import //exergylogo from '../../assets///exergylogo.png'; // Replace with the actual path to your logo image
import facebook from '../../assets/facebook.png'; // Replace with the actual path to your image
import instagram from '../../assets/instagram.png'; // Replace with the actual path to your image
import twitter from '../../assets/twitter.png'; // Replace with the actual path to your image
import linkedin from '../../assets/linkedin.png'; // Replace with the actual path to your image

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
  },
  image: {
    width: '100%',
    height: 'auto',
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
  },
  logoContainer: {
    position: 'absolute',
    top: '-325px',
    left: '20px',
  },
  logoImage: {
    width: '100px',
    height: 'auto',
  },
  menuIconContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: 1,
  },
  menuIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '60px',
  },
  menuLine: {
    width: '150%',
    height: '8px',
    backgroundColor: 'white',
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const Ancillarys = () => {
  return (
    <div style={styles.container}>
      <div style={styles.menuIconContainer}>
        <div style={styles.menuIcon}>
          <div style={styles.menuLine}></div>
          <div style={{ ...styles.menuLine, backgroundColor: '#FF007F', marginBottom: '8px', marginTop: '8px' }}></div>
          <div style={styles.menuLine}></div>
        </div>
      </div>
      <div style={styles.logoContainer}>
        {/* <img src={//exergylogo} alt="Logo" style={styles.//exergylogo} /> */}
      </div>
      <img src={Ancillary} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
        <h1 style={styles.heading}>Ancillary</h1>
        <p style={styles.paragraph}>
          Exergy Solutions revolutionizes the agricultural sector with our <br />
          technology-driven GIS and remote sensing solutions. We deploy satellite <br />
        </p>
      </div>

      <div style={styles.imageBox}>
        <img src={facebook} alt="Image 1" style={styles.image} />
        <p style={styles.paragraph}></p>
      </div>

      <div style={styles.imageBox}>
        <img src={instagram} alt="Image 2" style={styles.image} />
        <p style={styles.paragraph}></p>
      </div>

      <div style={styles.imageBox}>
        <img src={twitter} alt="Image 3" style={styles.image} />
        <p style={styles.paragraph}></p>
      </div>

      <div style={styles.imageBox}>
        <img src={linkedin} alt="Image 4" style={styles.image} />
        <p style={styles.paragraph}></p>
      </div>
    </div>
  );
};

export default Ancillarys;
