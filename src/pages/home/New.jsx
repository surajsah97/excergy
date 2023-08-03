import { Link } from 'react-router-dom';
import imagelogo from '../../assets/imagelogo.jpg'; // Replace with the actual path to your image
import exergylogo from '../../assets/exergylogo.png'; // Replace with the actual path to your logo image
// import { FiMenu } from 'react-icons/fi'; // Import the menu icon from react-icons

const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      margin: '0',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    paragraphBox: {
      position: 'absolute',
      width: 'auto',
      padding: '10px',
      color: 'white',
      margin: '20px',
      fontFamily: 'Jost,',
      fontWeight: 300,
      fontSize: '20px',
      lineHeight: '1.6', // Add line spacing
      
    },
    heading: {
        fontWeight: 500,
        fontFamily: 'Jost, sans-serif', // Use Jost font for headings
        marginBottom: '5px',
        // textAlign: 'center',
      },
    
  };
  
  const New = () => {
    return (
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img src={exergylogo} alt="Logo" style={styles.exergylogo} />
        </div>
        {/* <img src={ExergyWebsite} alt="Your Image" style={styles.image} /> */}
  
      {/* Power paragraphs */}
      <div style={{ ...styles.paragraphBox, top: '220px', left: '50px', marginBottom: '20px' }}>
      <img src={imagelogo} alt="Your Image" style={styles.image} />

      <h1><span style={{ fontSize: '58px' }}>POWER TO EVOLVE</span></h1>
        <h3 style={styles.heading}>GIVE A DIGITAL TRANSFORMATION TO YOUR BUSINESS!</h3>
        <p>
        Hey there, welcome to Exergy Solutions! We have been helping businesses<br/>
        around accelerate their digital transformation for over 9 years. Our team the  <br/>
        world works closely with you to come up with custom digital solutions that match<br/>
        your unique business needs.
        </p>
      </div>
      {/* Add more left side paragraphs with headings and content as needed */}
      
      {/* ASSESMENT & EXAMINATION SERVICES */}
      <div style={{ ...styles.paragraphBox, top: '1599px', left: '50px', marginBottom: '20px' }}>
      <Link to="/examination"  style={{textDecoration:'none', color:'white'}}>
        <h2 style={styles.heading}>ASSESMENT & EXAMINATION SERVICES</h2></Link>
        <p>
        Whether you need help with test administration,<br/>
scoring, or analysis, we offer end-to-end assessment<br/>
and examination services to meet your needs.
        </p>
        <ul>
        <Link to="/preexam"  style={{textDecoration:'none', color:'white'}}>
          <li>Online Candidate Enrolment</li></Link>
          <Link to="/postexam"  style={{textDecoration:'none', color:'white'}}>
          <li>Examination Security Solutions</li></Link>
          <li>Live CCTV Surveillance</li>
          <li>Live Biometric Attendance</li>
          <li>Frisking Services</li>
          <li>OMR Scanning Services</li>
          <li>Online Document Security Services</li>
          <li>E-Recuitment for Police , Para Military Forces</li>
          <li>Other E-recruitment Services</li>
        </ul>
      </div>
      {/* Add more left side paragraphs with headings and content as needed */}
    
      {/*IT/ITES SERVICES */}
      <div style={{ ...styles.paragraphBox, top: '3160px', left: '50px', marginBottom: '20px' }}>
        <h2 style={styles.heading}>IT/ITES SERVICES</h2>
        <Link to="/socialmedia"  style={{textDecoration:'none', color:'white'}}>
        <p>
        We offer comprehensive IT/ITES services that cater to<br/>
businesses of all sizes, from small startups to large<br/>
enterprises. Our services are designed to help our<br/>
clients leverage the latest technologies and stay<br/>
competitive in todays rapidly evolving<br/>
business landscape.
        </p></Link>
        <ul>
        <Link to='/webdevelopment' style={{textDecoration:'none', color:'white'}}>
           <li>Web Application Development</li></Link>
           <Link to='/mobile' style={{textDecoration:'none', color:'white'}}>  
           <li>Mobile Application Development</li></Link>
           <Link to='/cloudservice' style={{textDecoration:'none', color:'white'}}> 
           <li>Cloud Services</li></Link>
        </ul>
      </div>
      {/* Add more left side paragraphs with headings and content as needed */}
      {/*DIGITAL MARKETING*/}
      <div style={{ ...styles.paragraphBox, top: '3949px', left: '50px', marginBottom: '20px' }}>
      <Link to="/digitalmarketing"  style={{textDecoration:'none', color:'white'}}>
        <h2 style={styles.heading}>DIGITAL MARKETING</h2></Link>
        <Link to="/sociallistining"  style={{textDecoration:'none', color:'white'}}>

        <p>
        We follow a 360-degree marketing approach to make<br/>
your brand stand out. Creative & Design, Social Media<br/>
Marketing, SEO, Media Planning & Buying, Digital<br/>
Analytics and Marketing Automation, sentiment<br/>
analysis and more. You name it, we deliver it!<br/>
        </p></Link>
      </div>
      {/* Add more left side paragraphs with headings and content as needed */}
     
      {/*SMART CITY SURVEILLANCE SOLUTIONS */}
      <div style={{ ...styles.paragraphBox, top: '5499px', left: '50px', marginBottom: '20px' }}>
      <Link to="/smartcity"  style={{textDecoration:'none', color:'white'}}>
        <h2 style={styles.heading}>SMART CITY SURVEILLANCE <br/>SOLUTIONS</h2></Link>
        <p>
        We offer advanced Smart City Surveillance Solutions<br/>
for comprehensive surveillance and monitoring.<br/>
Our solutions integrate various surveillance<br/>
technologies such as CCTV, sensors, and analytics<br/>
to detect and respond to potential security threats<br/>
in real-time.
        </p>
      </div>
      {/* Add more left side paragraphs with headings and content as needed */}
    
      {/* Geospatial & EXAMINATION SERVICES */}
      <div style={{ ...styles.paragraphBox, top: '7059px', left: '50px', marginBottom: '20px' }}>
       <Link to="/flood"  style={{textDecoration:'none', color:'white'}}>
        <h2 style={styles.heading}>GEOSPATIAL & EXAMINATION SERVICES</h2></Link> 
        <p>
        We provide cutting-edge Geospatial Services and<br/>
Solutions to a wide range of industries. Our advanced<br/>
technologies and state-of-the-art systems enable us to<br/>
collect, process, and analyze geospatial data from a<br/>
variety of sources, including satellite imagery, aerial<br/>
photography, LIDAR, and GPS.
        </p>
        <ul>
          <li>Remote Sensing & GIS Consultancy Services</li>
          <Link to="/buildingmanage"  style={{textDecoration:'none', color:'white'}}>
          <li>2D/3D Mapping & Modeling of Smart Cities</li></Link>
          <li>Photogrammetry Services</li>
          <li> LULC Mapping and Digitization</li>
          <li>Drone & Topographical Survey and Mapping</li>
          <Link to="/land"  style={{textDecoration:'none', color:'white'}}>
          <li>Property Survey</li></Link>
          <li> Infrastructure Monitoring & Management</li>
          <li>Location Based Service</li>
          <Link to="/gis"  style={{textDecoration:'none', color:'white'}}>
          <li>GIS-based Decision-Making Platform</li></Link>
        </ul>
      </div>
      {/* Add more left side paragraphs with headings and content as needed */}
      {/* ... */}

{console.log("hi")}




      {/* Right side paragraphs */}
      <div style={{ ...styles.paragraphBox, top: '840px', right: '50px', marginBottom: '20px' }}>
        
        <h2 style={styles.heading}>OUR SERVICES</h2>
        <h1 >POWER THAT LEAD US</h1>
        <ul>
          <Link to='/agriculture' style={{textDecoration:'none', color:'white'}}>
            <li>Assesments & Examination Services</li></Link>
          <li>Live CCTV Surveillance</li>
          <li>Biometric Verification</li>
          <li>Facial Recognition</li>
          <Link to="/cloudservice"  style={{textDecoration:'none', color:'white'}}>
          <li>IT/ITES Services</li></Link>
          <li>Digital MArketing</li>
          <Link to='/systemintegration' style={{textDecoration:'none', color:'white'}}> 
          <li>System Integration Services</li></Link>
          <Link to="/geological"  style={{textDecoration:'none', color:'white'}}>
          <li>Geospatial Services & Solutions</li></Link>
        </ul>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
     
       {/* BIOMETRIC VERIFICATION */}
       <div style={{ ...styles.paragraphBox, top: '2389px', right: '50px', marginBottom: '20px' }}>
        <h2 style={styles.heading}>BIOMETRIC VERIFICATION</h2>
        <Link to="/systemintegration"  style={{textDecoration:'none', color:'white'}}>

        <p>
        We offer a range of solutions, from simple<br/>
authentication systems to more advanced biometric<br/>
identification and verification systems. Our team of<br/>
experts can help you select the best biometric<br/>
technology for your specific needs and integrate it<br/>
seamlessly into your existing infrastructure.<br/>
Fingerprints and IRIS scanning are widely used in<br/>
examination for impersonation control and attendance<br/>
marking purposes while facial recognition is a more<br/>
advanced way of verification to minimize the<br/>
possibility of students swapping places.
        </p></Link>
        <ul>
          <li>Fingerprint</li>
          <li>Iris & Rential Scans</li>
          <li>Hand Geometry</li>
          <li>Facial Recognition</li>
          <li>Voice Recognition</li>
        </ul>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
      
       {/* BUILDING AUTOMATION SOLUTIONS */}
       <div style={{ ...styles.paragraphBox, top: '4738px', right: '50px', marginBottom: '20px' }}>
        <h2 style={styles.heading}>BUILDING AUTOMATION <br/>SOLUTIONS</h2>
        <p>
        Our cutting-edge technology and state-of-the-art<br/>
systems allow for centralized control of various<br/>
building systems such as HVAC, Lighting, Fire<br/>
Detection, Access control and CCTV. Our smart<br/>
solutions help save energy, reduce operational<br/>
costs, and enhance occupant comfort and safety.
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
     
       {/* CROWD MANAGEMENT SOLUTIONS */}
      <div style={{ ...styles.paragraphBox, top: '6290px', right: '50px', marginBottom: '20px' }}>
      <Link to="/crowdmanagement"  style={{textDecoration:'none', color:'white'}}>
        <h2 style={styles.heading}>CROWD MANAGEMENT<br/> SOLUTIONS</h2></Link>
        <p>
        We specialize in providing advanced Crowd<br/>
Management Solutions to help event organizers,<br/>
stadium operators, and public safety agencies ensure<br/>
the safety and security of crowds. Our solutions help<br/>
our clients identify potential crowd-related risks, such<br/>
as overcrowding, stampedes, and security threats, and<br/>
respond proactively to mitigate these risks.<br/>
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
     
      {/* OUR CLIENTS */}
      <div style={{ ...styles.paragraphBox, top: '7859px', right: '50px', marginBottom: '20px' }}>
        <h2 style={styles.heading}>OUR CLIENTS<br/>
         THE POWER WE HAVE BUILT SO FAR</h2>
        <p>
        We have efficiently provided our services to many<br/>
companies across sectors including local government,<br/>
agriculture and forestry, natural resource<br/>
management, transportation, healthcare, public<br/>
safety & defense, banking & insurance, disaster<br/>
management, telecommunication, etc.
        </p>
      </div>
      {/* Add more right side paragraphs with headings and content as needed */}
      {/* ... */}
    </div>
  );
};

export default New;
