import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imagesix from '../../assets/imagesix.jpg';
// import exergylogo from '../../assets/exergylogo.png';

const styles = {
  container: {
    background: `url(${imagesix})`,
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
  unorderedList : {
    listStyleType: 'none', // Remove bullet points from list items
    padding: '0', // Remove default padding
  },
  listItem: {
    marginBottom: '30px', // Add margin between list items
  },
};

const Six = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>

        {/* DIGITAL MARKETING */}
        <div >
          <Link to="/digitalmarketing">
            <h2 >DIGITAL MARKETING</h2>
          </Link>
          <Link to="/sociallistining">
            <p >
              We follow a 360-degree marketing approach to make <br/>your brand stand out. Creative & Design, Social Media<br/>
              Marketing, SEO, Media Planning & Buying, Digital <br/>Analytics and Marketing Automation, sentiment analysis <br/>and
              more. You name it, we deliver it!
            </p>
          </Link>
        </div>
        {/* Add more left side paragraphs with headings and content as needed */}
      </Box>
    </Box>
  );
};

export default Six;
