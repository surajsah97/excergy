import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imageten from '../../assets/imageten.jpg';
// import exergylogo from '../../assets/exergylogo.png'

const styles = {
  container: {
    background: `url(${imageten})`,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
    width: '100%',
    color: 'white',
  },
  content: {
    padding: '60px',
    borderRadius: '8px',
    maxWidth: '60%',
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
    lineHeight: '1.6', // Set line height for list items
  },
  listItem: {
    marginBottom: '30px', // Add margin between list items
    lineHeight: '1.6', // Set line height for list items
  },
  // Updated paragraphBox style with lineHeight
  paragraphBox: {
    marginBottom: '20px',
    lineHeight: '1.6', // Set the desired line height value
  },
};

const Ten = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        {/* Geospatial & EXAMINATION SERVICES */}
        <div >
          <Link to="/flood" >
            <h2 >GEOSPATIAL & EXAMINATION SERVICES</h2>
          </Link>
          <p >
            We provide cutting-edge Geospatial Services and <br/>Solutions to a wide range of industries. Our advanced<br/>
            technologies and state-of-the-art systems enable us to<br/> collect, process, and analyze geospatial data from a<br/>
            variety of sources, including satellite imagery, aerial <br/>photography, LIDAR, and GPS.
          </p>
          <ul >
            <li  >Remote Sensing & GIS Consultancy Services</li>
            <Link to="/buildingmanage" >
              <li  >2D/3D Mapping & Modeling of Smart Cities</li>
            </Link>
            <li  >Photogrammetry Services</li>
            <li  >LULC Mapping and Digitization</li>
            <li  >Drone & Topographical Survey and Mapping</li>
            <Link to="/land" >
              <li  >Property Survey</li>
            </Link>
            <li  >Infrastructure Monitoring & Management</li>
            <li  >Location Based Service</li>
            <Link to="/gis" >
              <li  >GIS-based Decision-Making Platform</li>
            </Link>
          </ul>
        </div>
        {/* Add more left side paragraphs with headings and content as needed */}
        {/* ... */}
      </Box>
    </Box>
  );
};

export default Ten;
