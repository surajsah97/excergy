import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import image from '../../assets/image.jpg';

const styles = {
  container: {
    background: `url(${image})`,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-start',
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
  
};

const Eight = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        {/* SMART CITY SURVEILLANCE SOLUTIONS */}
        <div >
          <Link to="/smartcity">
            <h2 >SMART CITY SURVEILLANCE SOLUTIONS</h2>
          </Link>
          <p >
            We offer advanced Smart City Surveillance Solutions<br/> for comprehensive surveillance and monitoring.<br/> Our
            solutions integrate various surveillance <br/>technologies such as CCTV, sensors, and analytics<br/> to detect and respond
            to potential security threats<br/> in real-time.
          </p>
        </div>
        {/* Add more left side paragraphs with headings and content as needed */}
      </Box>
    </Box>
  );
};

export default Eight;
