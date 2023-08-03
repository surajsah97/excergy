import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imagefi from '../../assets/imagefi.jpg';

{/* <Box sx={styles.container} className=" flex items-center justify-start h-100v p-1"> */}
      {/* <Box sx={styles.content} className="flex p-6 flex-col justify-around container h-100v"></Box> */}
const styles = {
  container: {
    background: `url(${imagefi})`,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    // minHeight: '100vh',
    // padding: '20px',
    width: '100%',
  },
  content: {
    // padding: '60px',
    // borderRadius: '8px',
    // maxWidth: '60%',
    // border: '5px black solid',
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
  },
  listItem: {
    marginBottom: '30px', // Add margin between list items
  },
};

const Five = () => {
  return (
    <Box sx={styles.container} className=" flex items-center justify-start h-100v p-1">
      <Box sx={styles.content} className="flex p-6 flex-col container h-100v">
        {/* IT/ITES SERVICES */}
        <div >
          <h2 >IT / ITES SERVICES</h2>
          <Link to="/socialmedia" >
            <p >
              We offer comprehensive IT/ITES services that cater to <br/>businesses of all sizes, from small startups to large<br/>
              enterprises. Our services are designed to help our <br/>clients leverage the latest technologies and stay<br/>
              competitive in todays rapidly evolving<br/> business landscape.
            </p>
          </Link>
          <ul >
            <Link to="/webdevelopment">
              <li >Web Application Development</li>
            </Link>
            <Link to="/mobile">
              <li >Mobile Application Development</li>
            </Link>
            <Link to="/cloudservice">
              <li >Cloud Services</li>
            </Link>
          </ul>
        </div>
        {/* Add more left side paragraphs with headings and content as needed */}
      </Box>
    </Box>
  );
};

export default Five;
