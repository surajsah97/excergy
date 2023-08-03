import {useState} from 'react';
// import GIS from '../subpages/GIS';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/Logo.png';
import welogo from '../../assets/welogo.png'

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClickMenu = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  

const styles = {

  // logoContainer: {
  //   position: 'absolute',
  //   top: '20px', // Adjust the top position
  //   left: '20px',
  // },
  // logoImage: {
  //   width: '10rem',
  //   height: 'auto',
  //   // zIndex: 1,
  // },
  menuIconContainer: {
    cursor: 'pointer',
  },
  menuIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '60',
  },
  menuLine: {
    width: '100%',
    height: '8px',
    backgroundColor: 'white',
  },
}


  return (
    <div className="navbar flex items-center justify-between">
       {/* <div style={styles.logoContainer}> */}
       <div className='logoContainer'>
         <img src={welogo} alt="Logo" className='logo' />
         {/* <div className="logo"></div> */}
       </div>

      <div>
      {/* <p onClick={handleClickMenu}>Click</p> */}
      <div style={styles.menuIconContainer} className='menuIconContainer' onClick={handleClickMenu}>
        <div style={styles.menuIcon}>
          <div style={styles.menuLine}></div>
          <div style={{ ...styles.menuLine, backgroundColor: '#FF007F', marginBottom: '8px', marginTop: '8px' }}></div>
          <div style={styles.menuLine}></div>
        </div>
      </div>

      {isShown && <Navlinks />}

    </div>
    </div>
  );
}

function Navlinks() {
  const [isSubMenuShown, setIsSubMenuShown] = useState(false);

  const handleClickSubMenu = event => {
    // 👇️ toggle shown state
    // setIsSubMenuShown(current => !current);

    // 👇️ or simply set it to true
    console.log(isSubMenuShown)
    setIsSubMenuShown(!isSubMenuShown)  ;
  };

  return (
    <div className='navlinks'>
      <p onClick={handleClickSubMenu}>Portfolio</p>
      {isSubMenuShown && (
        <div className='sub-nav-link'>
          <Link to="/gis">GIS service</Link>
          <Link to="/examination">Examination</Link>
          <Link to="/systemintegration">System Integration</Link>
        </div>
      )}
      <p onClick={handleClickSubMenu}>GIS services</p>
      {isSubMenuShown && (
        <div className='sub-nav-link'>
          <Link to="/changedetection">Change Detection and Analysis</Link>
          <Link to="/agriculture">Agriculture</Link>                            
          <Link to="/engeenering">Engineering and Infrastructure</Link>                            
          {/* <Link to="/agriculture">Forestry</Link>                             */}
          {/* <Link to="/agriculture">Flood vulnerability and hazard zonation mapping </Link>                             */}
          <Link to="/land">Land Management</Link>                            
          <Link to="/geological">Geological and mineral Potiential Mapping</Link>                            
        </div>
      )}
      <p onClick={handleClickSubMenu}>Examination</p>
      {isSubMenuShown && (
        <div className='sub-nav-link'>
          <Link to="/preexam">Pre</Link>
          <Link to="/postexam">Post</Link>                            
          <Link to="/ancillarys">Ancillarys</Link>                            
        </div>
      )}
      <p onClick={handleClickSubMenu}>IT/Ites</p>
      {isSubMenuShown && (
        <div className='sub-nav-link'>
          <Link to="/webdevelopment">Web Development</Link>
          <Link to="/mobile">Mobile Development</Link>                            
          <Link to="/cloudservice">Cloud Service </Link>                            
          <Link to="/digitalmarketing">Digital Marketing </Link>
          <Link to="/contentmarketing">Digital Marketing (Content )
          </Link>                            
          <Link to="/socialmedia">Social Media Monitoring </Link>                            
          <Link to="/contentmarketing">Content Marketing</Link>                            
          <Link to="/sentiment">Sentiment Analysis</Link>                            
        </div>
      )}
      <p onClick={handleClickSubMenu}>System Integration </p>
      {isSubMenuShown && (
        <div className='sub-nav-link'>
          <Link to="/buildingmanage">Building Management System</Link>
          <Link to="/smartcity">Smart City Solutions</Link>                            
          <Link to="/crowdmanagement">Crowd Management</Link>               
        </div>
      )}
            
    </div>
  );
}
