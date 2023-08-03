import {Box } from '@mui/material';
import imagee from '../../assets/imagee.jpg'

const styles = {
  container: {
    background: `url(${imagee})`,
    backgroundColor:'black',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'flex-end',
    padding: '20px',
    width: '100%',
    color:'white'
  },
  content: {
    padding: '5rem',
    borderRadius: '8px',
    maxWidth: '45%',
  },
  heading: {
      fontWeight: 500,
      // fontFamily: 'Jost, sans-serif', // Use Jost font for headings
      marginBottom: '5px',
      fontSize:'2.2rem'
    },

};

const Eleven = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        
         {/* OUR CLIENTS */}
      <div >
        <h2 >OUR CLIENTS</h2>
         <h4 style={{fontSize:"3rem"}}>THE POWER WE HAVE BUILT SO FAR</h4>
         <p >        We have efficiently provided our services to many<br/>
companies across sectors including local government,<br/>
agriculture and forestry, natural resource<br/>
management, transportation, healthcare, public<br/>
safety & defense, banking & insurance, disaster<br/>
management, telecommunication, etc.
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
      {/* ... */}
      </Box>
    </Box>
  );
};

export default Eleven;
