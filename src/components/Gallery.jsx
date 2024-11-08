import React from 'react';
import "./Gallery.css"
import { useState,useRef,useEffect } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

const Gallery =()=> {
    const handleClickSroll = () => {
        // ref.current?.scrollIntoView({ behavior: "smooth" });
        window.scroll({behavior:"smooth"})
      };
    
      const contactScroll = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      };
      const teamScroll = () => {
        document.getElementById("team").scrollIntoView({ behavior: "smooth" });
      };
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
      }
      
  return (
    <>

    <div className="menu" onClick={toggleMenu}>
    <img
          src="https://res.cloudinary.com/dweikgdwq/image/upload/v1730586225/Brainy%20badgers/menu_wc3xsu.png"
          alt="menu"
        />
    </div>
     <div className="navbar flex justify-between items-center px-4 py-2 gallerynav">
<h1 className="bb" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586225/Brainy%20badgers/logo_drg66f.png' style={{display:"inline-block", width:"20px",marginBottom:"3px",marginRight:"5px"}}/> BRAINY<span style={{color:"#d7ad46"}}>BADGERS</span></h1>
<ul className={isMenuOpen ? "menu-open" : "menu-closed flex space-x-8 galleyul"}>
  <li onClick={handleClickSroll} className='responsive-li'><a href="/" >HOME</a></li>
  <li onClick={handleClickSroll}><a href="/#about" >ABOUT US</a></li>
  <li onClick={handleClickSroll}><a href="/#challenges" >CHALLENGES</a></li>
  {/* <li onClick={handleClickSroll}><a href="#prototype" >PROTOTYPE</a></li> */}
  <li onClick={contactScroll}><a href="/gallery" >GALLERY</a></li>
  <li onClick={contactScroll}><a href="/#contact" >CONTACT US</a></li>
</ul>
</div>

<h2 style={{textAlign:"center", marginTop:"50px", fontSize:"2em"}}>The Brainy badgers Gallery</h2>
<p style={{textAlign:"center", color:"#444"}}>To all the memories from E-Lab 🎉</p>
    <MDBRow className='row'>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730747289/Brainy%20badgers/WhatsApp_Image_2024-10-15_at_15.35.10_4f4baadf_idet7p.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730747092/Brainy%20badgers/20241021_163507_v5xxcg.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
         <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730986682/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_11.09.50_e1ba0e89_iim4ck.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730986681/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_11.09.46_c36965db_amethw.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
         <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730986668/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_11.09.51_8431d086_bwkdtf.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730746720/Brainy%20badgers/WhatsApp_Image_2024-09-25_at_15.07.42_c1b07a22_k4239f.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730985313/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_10.27.04_2e252122_wy6btm.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730986666/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_11.46.19_10d5b140_eudyjx.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730986666/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_11.46.13_6c8280ea_eas7rg.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
          <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731021581/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_11.09.47_2313a99b_a4qnmz.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        
        
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730985314/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_10.27.05_f74c78e1_c2in1m.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730985664/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_10.27.05_d22c47d9_qx3yel.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730987055/Brainy%20badgers/WhatsApp_Image_2024-11-05_at_17.52.42_7fb6fe53_ruh5pa.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />
        <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731021980/Brainy%20badgers/amk_oj6ztq.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
         <img
          src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731021981/Brainy%20badgers/kenza_d1lmf4.jpg'
          className='w-80 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />
      </MDBCol>
      
      
    </MDBRow>
    
    <div className="footer">
   <div className="footercontent">
   <div>
   <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731020833/Brainy%20badgers/Group_9_qeff5g.png' alt='logo' style={{position:"relative", right:"40px",height:"60%",width:"100px",height:"100px"}}/>
   <p style={{width:"250px",position:"relative",right:"80px",color:"#444",fontSize:"13px",textAlign:"left",bottom:"15px"}}>We are a diverse team of Entrepreneurs with a shared mission to transform Rwanda's agriculture.</p>
   <span style={{display:"flex",marginLeft:"-40px"}}><FaInstagram style={{marginRight:"5%"}}/> <FaYoutube style={{marginRight:"5%"}}/> <FaTwitter style={{marginRight:"5%"}}/> <FaLinkedin style={{marginRight:"5%"}}/></span>
   </div>

   <div>
    <div style={{display:"flex", flexDirection:"row"}}>
    <div style={{marginTop:"30px"}}>
       <h3 style={{fontSize:"1.2em", color:"#111", marginBottom:"4px", fontWeight:"bold"}}>Quick Links</h3>
       <span style={{color:"#444", fontSize:"0.9em"}}><a href="/#about">About Us</a></span><br/>
       <span style={{color:"#444", fontSize:"0.9em"}}><a href="/#challenges">Challenges</a></span><br/>
       <span style={{color:"#444", fontSize:"0.9em"}}><a href="/gallery">Gallery</a></span>
     </div>
     <div style={{marginLeft:"160px",marginTop:"30px", marginBottom:"4px",}}>
       <h3 style={{fontSize:"1.2em", color:"#111",fontWeight:"bold"}}>Socials</h3>
       <span style={{color:"#444", fontSize:"0.9em"}}>Instagram</span><br/>
       <span style={{color:"#444", fontSize:"0.9em"}}>Youtube</span>
     </div>
     <div style={{marginLeft:"160px",marginTop:"30px", marginBottom:"4px"}}>
       <h3 style={{fontSize:"1.2em", color:"#111",fontWeight:"bold"}}>Projects</h3>
       <span style={{color:"#444", fontSize:"0.9em"}}><a href="https://www.figma.com/proto/fEM0FIUtpFFRp5Tp8H7WKJ/Prototype-BB?node-id=8-338&node-type=frame&t=6kgLkunxygFrfHm4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A338" target='_blank' rel='noopener noreferrer'>AgroPoints</a></span><br/>
     </div>
   </div>
    </div>
   </div>
   <div className="line"></div>
   <span style={{color:"#777", fontSize:"0.8em"}}>Copyright &copy; 2024. Brainy Badgers</span></div>
    </>
  );
}

export default Gallery