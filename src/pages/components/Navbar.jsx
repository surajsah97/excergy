// import { useState } from 'react';
// import { Box } from '@mui/material';
// // import imagelogo from '../../assets/imagelogo.jpg';
// import Logo from '../../assets/Logo.png';

// const styles = {
//   container: {
//     position: 'relative', // Add position relative to the container
//     width: '100vw',
//     // border:'red 2px solid'
//   },
//   content: {
//     width: '60vh',
//     // border:'black 2px solid'
//   },
//   logoContainer: {
//     position: 'absolute',
//     top: '20px', // Adjust the top position
//     left: '20px',
//   },
//   logoImage: {
//     width: '100px',
//     height: 'auto',
//     zIndex: 1,
//   },
//   menuIconContainer: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     cursor: 'pointer',
//     zIndex: 2, // Set a higher zIndex for the menu icon container
//   },
//   menuIcon: {
//     width: '30px',
//     height: '30px',
//     borderRadius: '50%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '60px',
//   },
//   menuLine: {
//     width: '150%',
//     height: '8px',
//     backgroundColor: 'white',
//   },
//   dropdownMenu: {
//     position: 'absolute',
//     top: '80px',
//     right: '30px',
//     backgroundColor: 'white',
//     borderRadius: '4px',
//     padding: '8px',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     zIndex: 999, // Set a higher zIndex value to make the dropdown appear above other elements
//     display: 'none',
//   },
//   Item: {
//     cursor: 'pointer',
//     margin: '8px 0',
//     '&:hover $subMenu': {
//       display: 'block',
//     },
//   },
//   subMenu: {
//     display: 'none',
//   },
// };

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Box sx={styles.container}>
//       <Box sx={styles.content}>
//         <div style={styles.menuIconContainer} onClick={handleMenuIconClick}>
//           <div style={styles.menuIcon}>
//             <div style={styles.menuLine}></div>
//             <div style={{ ...styles.menuLine, backgroundColor: '#FF007F', marginBottom: '8px', marginTop: '8px' }}></div>
//             <div style={styles.menuLine}></div>
//           </div>
//         </div>
//         {/* {console.log(isDropdownOpen)} */}
//         {(
//           <div style={styles.dropdownMenu}>
//             <div style={styles.dataItem}>
//               Data 1
//               <div style={styles.subMenu}>
//                 Subsection 1
//               </div>
//             </div>
//             <div style={styles.dataItem}>
//               Data 2
//               <div style={styles.subMenu}>
//                 Subsection 2
//               </div>
//             </div>
//             {/* Add more data items with subsections as needed */}
//           </div>
//         )}
//       </Box>
//       <div style={styles.logoContainer}>
//         <img src={Logo} alt="Logo" />
//       </div>
//     </Box>
//   );
// };

// export default Navbar;
///////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file for the Navbar styles

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">Logo</div>
//       <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         {/* Add more menu items here */}
//       </ul>
//       <button className="navbar-toggle" onClick={toggleMenu}>
//         <span className="navbar-icon"></span>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
////////////////////////////////////////////////////////////////////////////////////

import {useState} from 'react';

export default function App() {
  const [isShown, setIsShown] = useState(false);
  const [isSubMenuShown, setIsSubMenuShown] = useState(false);

  

  const handleClickMenu = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const handleClickSubMenu = event => {
    // 👇️ toggle shown state
    // setIsSubMenuShown(current => !current);

    // 👇️ or simply set it to true
    console.log(isSubMenuShown)
    setIsSubMenuShown(!isSubMenuShown)  ;
  };

  const handleClickedSubMenu = event => {
    let clicked_btn = event.target.value
    console.log(clicked_btn)
  }

  return (
    <div className="flex">
      <div className="">logo </div>
      <div>
      <button onClick={handleClickMenu}>Click</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          {/* <p> */}
            <button onClick={handleClickSubMenu}>click 1</button>
            <div>
              {isSubMenuShown && (
                <div>
                  
                  <button onClick={handleClickedSubMenu} value="click 1 1" >click 1 2</button>
                
                  <button onClick={handleClickedSubMenu}>click 2 2</button>
                
                  <button onClick={handleClickedSubMenu}>click 3 3</button>
                          
                </div>
              )}
            </div>
          {/* </p> */}
          <p>
            <button>click 2</button>
          </p>
          <p>
            <button>click 3</button>
          </p>          
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
    </div>
  );
}

function Box() {
  

  return (
    <div className="">
      <p>hii component</p>
    </div>
  );
}
