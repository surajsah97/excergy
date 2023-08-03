import { Box, Typography } from '@mui/material';
import imagelogo from '../../assets/imagelogo.jpg';

const styles = {
  container: {
    background: `url(${imagelogo})`,
    // background: "red",
    backgroundSize: 'cover',
    zIndex: -10
  },
  content: {
    height: "auto",
    // border: "2px solid black"
  },
};

const MyPage = () => {

  return (
    <Box sx={styles.container} className="flex items-center justify-start min-h-100 w-full">
      <Box sx={styles.content} className="w-60 flex justify-around flex-col p-1 m-3">
        <h1 className=''>POWER TO EVOLVE</h1>
        <h3 className=''>GIVE A DIGITAL TRANSFORMATION TO YOUR BUSINESS!</h3>
        <h6 className='pt-4 w-90'>
          Hey there, welcome to Exergy Solutions! We have been helping businesses
          around accelerate their digital transformation for over 9 years. Our team the
          world works closely with you to come up with custom digital solutions that match
          your unique business needs.
        </h6>
      </Box>
    </Box>
  );
};

export default MyPage;