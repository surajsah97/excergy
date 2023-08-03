import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imagef from '../../assets/imagef.jpg';

const styles = {
  container: {
    background: `url(${imagef})`,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    minHeight: '100vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: '20px',
    width: '100%',
    color: 'white',
  },
  content: {
    padding: '60px',
    borderRadius: '8px',
    maxWidth: '60%',
  },
  heading: {
    fontWeight: 500,
    fontFamily: 'Jost, sans-serif', // Use Jost font for headings
    marginBottom: '5px',
    fontSize: '2.2rem',
  },
  
  unorderedList: {
    listStyleType: 'none', // Remove bullet points from list items
    padding: '0', // Remove default padding
    lineHeight: '1.6', // Set line height for list items
  },
  listItem: {
    marginBottom: '30px', // Add margin between list items
    lineHeight: '1.6', // Set line height for list items
  },
  // Updated paragraphBox style with lineHeight
  paragraphBox: {
    top: '2389px',
    right: '50px',
    marginBottom: '20px',
    lineHeight: '1.6', // Set the desired line height value
  },
};

const Four = () => {
  return (
    <Box sx={styles.container} className=" flex items-center justify-end h-100v p-1">
      <Box sx={styles.content} className="flex p-6 flex-col justify-around container h-100v">

        {/* BIOMETRIC VERIFICATION */}
        <div >
          <h2 >BIOMETRIC VERIFICATION</h2>
          <Link to="/systemintegration" style={{ textDecoration: 'none', color: 'white' }}>
            <p >
              We offer a range of solutions, from simple <br/>authentication systems to more advanced biometric<br/> identification
              and verification systems. Our team of<br/> experts can help you select the best biometric <br/>technology for your
              specific needs and integrate it <br/>seamlessly into your existing infrastructure.<br/> Fingerprints and IRIS scanning
              are widely used in <br/>examination for impersonation control and attendance<br/> marking purposes while facial
              recognition is a more <br/>advanced way of verification to minimize the <br/>possibility of students swapping places.
            </p>
          </Link>
          <ul >
            <li >Fingerprint</li>
            <li >Iris & Rential Scans</li>
            <li >Hand Geometry</li>
            <li >Facial Recognition</li>
            <li >Voice Recognition</li>
          </ul>
        </div>
        {/* Add more right side paragraphs with headings and content as needed */}
      </Box>
    </Box>
  );
};

export default Four;
