// import React from 'react';

import Footerthree from "./Footerthree";
import Footertwo from "./Footertwo";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#343d52',
    // padding: '120px',
    color: '#ffffff',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
  };

  const formStyle = {
    margin: "5rem",
    width: "35rem",
    height: "100%"
  };

  const inputContainerStyle = {
    // width: "30rem",
    // display: 'flex',
    // alignItems: "center",
    // justifyContent: "space-between",
    // flexDirection: 'column',
    marginBottom: '3rem',
  };

  const inputStyle = {
    width: '250px',
    height: '3rem',
    border:'none',
    borderRadius: '2px',
    // marginBottom: '35px',
    padding: '5px',
    marginLeft:'20px'
  
  };

  const submitButtonStyle = {
    background: 'linear-gradient(to right, #ff00cc,#ff0033, #ff9900)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 30px',
    cursor: 'pointer',
    marginLeft:'10rem'
    
  };

  const verticalLineStyle = {
    height: '250px',
    border: '2px solid white',
    margin: '8rem',
  };


  return (
    <>
      <Footerthree/>
      <footer style={footerStyle}>
        {/* <div> */}
          <form style={formStyle}>
            <div style={inputContainerStyle} className='flex justify-between items-center'>
              <label>Name</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={inputContainerStyle}className='flex justify-between items-center'>
              <label>Email</label>
              <input type="email" style={inputStyle} />
            </div>
            <div style={inputContainerStyle} className='flex justify-between items-center'>
              <label>Contact</label>
              <input type="text" style={inputStyle} />
            </div>
            {/* <div > */}
            <button type="submit" style={submitButtonStyle}>Submit</button>
            {/* </div> */}
          </form>
          
        {/* </div> */}
        <div style={verticalLineStyle}></div>
        
          <p>
            Exergy Solutions,<br/>
            D-123, 1st Floor, Sector-63, Noida, 201301
            <br/>
            Phone: 0120-4256887, +91-9999916723
            <br />
            Email: info@exergysolutions.in<br/>
            Website: www.exergysolutions.in
          </p>

      </footer>
      <Footertwo/>
    </>
 );
};

export default Footer;
