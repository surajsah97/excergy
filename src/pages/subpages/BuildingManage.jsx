import BuildingManagements from '../../assets/BuildingManagements.jpg'
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

const BuildingManage = () => {
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
      <img src={BuildingManagements} alt="Your Image" style={styles.image} />

      <div style={{ ...styles.paragraphBox, top: '160px', left: '50px', marginBottom: '20px' }}>
                <h3 style={styles.h3}>BUILDING MANAGEMENT SYSTEM</h3>
        <div style={styles.h6} className="textContainer">
           As an IT service provider specializing in system integration, we bring
           <br />
           together diverse technologies, expertise, and industry best practices
           <br />
           to deliver seamless solutions that enhance efficiency, sustainability,
           <br />
           and user experience. Our services in Building Management System,
           <br />
           Smart City Solutions, and Crowd Management are designed to
           <br />
           empower organizations to optimize operations, leverage data-driven
           <br />
           insights, and embrace the potential of technology for more efficient
           <br />
           management.
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

export default BuildingManage;
