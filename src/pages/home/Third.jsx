import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imagethird from '../../assets/imagethird.jpg';

const styles = {
  container: {
    background: `url(${imagethird})`,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    // minHeight: '100vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // padding: '20px',
    // width: '100%',
    color: 'white',
  },
  content: {
    // padding: '60px',
    // borderRadius: '8px',
    // maxWidth: '60%',
  },
  heading: {
    // fontWeight: 500,
    // fontFamily: 'Jost, sans-serif', // Use Jost font for headings
    // marginBottom: '5px',
    // fontSize: '2.2rem',
  },
  unorderedList: {
    // listStyleType: 'none', // Remove bullet points from list items
    // padding: '0', // Remove default padding
  },
  listItem: {
    // marginBottom: '30px', // Add margin between list items
  },
};

const Third = () => {
  return (
    <Box sx={styles.container} className=" flex items-center justify-start h-100v p-1">
      <Box sx={styles.content} className="flex p-6 flex-col justify-around container h-100v">

        {/* ASSESSMENT & EXAMINATION SERVICES */}
        {/* <div > */}
          <Link to="/examination">
            <h2 >ASSESSMENT & EXAMINATION SERVICES</h2>
          </Link>
          <p >
            Whether you need help with test administration,<br/> scoring, or analysis, we offer end-to-end assessment<br/> and
            examination services to meet your needs.
          </p>
          <ul className='flex flex-col justify-around'>
            <Link to="/preexam">
              <li style={styles.listItem}>Online Candidate Enrolment</li>
            </Link>
            <Link to="/postexam">
              <li >Examination Security Solutions</li>
            </Link>
            <li >Live CCTV Surveillance</li>
            <li >Live Biometric Attendance</li>
            <li >Frisking Services</li>
            <li >OMR Scanning Services</li>
            <li >Online Document Security Services</li>
            <li >E-Recruitment for Police, Para Military Forces</li>
            <li >Other E-recruitment Services</li>
          </ul>
        {/* </div> */}
        {/* Add more left side paragraphs with headings and content as needed */}
      </Box>
    </Box>
  );
};

export default Third;
