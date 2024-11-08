import React from "react";
import "./Landing.css"
import '../index.css';
import "../App.css"

// import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram,FaLinkedin,FaPhone,FaTwitter, FaVoicemail, FaYoutube} from "react-icons/fa"
import { useState,useRef,useEffect } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Slider from './Slider';
import Button from "react-bootstrap/Button"
import ReactPlayer from 'react-player';
import AOS from 'aos'
import { motion } from 'framer-motion';
import useScrollDirection from '../utils/useScrollDirection';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Gallery from './Gallery';
const Landing = ()=>{
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({})
      const onchange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
      const ref = useRef(null);
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
      
    
      const onSubmit = () => {
        console.log("hhh")
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
          if (!formData[key]) {
            newErrors[key] = ` ${key} is required!`;
          }
        })
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors); // Set errors if any fields are empty
        }else{
        axios
          // .post("https://portifolio-backend-u7ba.vercel.app/contactme", formData)
          .post("https://portifolio-backend-1-sbzy.onrender.com/contactme", formData)
          .then((data) => {
            setErrors({});
            window.location.reload()
            console.log("dataaa "+data)
            return;
          })
          .catch((ex) => console.log("erorrrr "+ex));
        }
      };
    
      useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with a 1s duration
      }, []);
    
      const scrollDirection = useScrollDirection();

      return(
        <div className='container'>

        <div className="menu" onClick={toggleMenu}>
       <img
             src="https://res.cloudinary.com/dweikgdwq/image/upload/v1730586225/Brainy%20badgers/menu_wc3xsu.png"
             alt="menu"
           />
       </div>
        <div className="navbar flex justify-between items-center px-4 py-2">
   <h1 className="bb" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586225/Brainy%20badgers/logo_drg66f.png' style={{display:"inline-block", width:"20px",marginBottom:"3px",marginRight:"5px"}}/> BRAINY<span style={{color:"#d7ad46"}}>BADGERS</span></h1>
   <ul className={isMenuOpen ? "menu-open" : "menu-closed flex space-x-8"}>
     <li onClick={handleClickSroll} className='responsive-li'><a href="#home" >HOME</a></li>
     <li onClick={handleClickSroll}><a href="#about" >ABOUT US</a></li>
     <li onClick={handleClickSroll}><a href="#challenges" >CHALLENGES</a></li>
     {/* <li onClick={handleClickSroll}><a href="#prototype" >PROTOTYPE</a></li> */}
     <li onClick={contactScroll}><a href="/gallery" >GALLERY</a></li>
     <li onClick={contactScroll}><a href="#contact" >CONTACT US</a></li>
   </ul>
 </div>
 
 <div className="home" id='home'>
     <div>
     <h1 className='animate'>The Brainy <br/>Badgers</h1>
     <p className='animate'>Our think tank mission is to transform the agricultural landscape through innovative strategies that drive job creation.</p>
     <button className='animate' onClick={contactScroll}>Contact Us</button>
     </div>
     <div className='imagecircle animate'>
     <div class="scale" id="one"></div>
   <div class="scale" id="two"></div>
   <div class="scale" id="three"></div>
   <div class="scale" id="four"></div>
     </div>
 
 </div>
 
 <div className="aboutus" id='about'>
   <div className='about' data-aos="fade-up" data-aos-delay="200"> 
   {/* <h2>Get To Know Us</h2>
   <p>We are a passionate and diverse team of six innovators from all corners of Africa, driven by a shared mission to tackle some of the most pressing challenges in agriculture. With a perfect balance of gender and a variety of cultural and educational backgrounds, our team reflects the spirit of collaboration and inclusion that defines our journey.<br/><br /> Our journey is just beginning, and we are excited about what lies ahead. With the support of ALU and the collaborative spirit within our team, we are confident that our solutions will contribute to transforming agriculture and creating more jobs for future generations. The best is yet to come, and we invite you to follow our progress as we work towards a brighter, more sustainable future.</p>
   <button onClick={teamScroll}>Meet Our Team!</button> */}
   <Slider teamScroll={teamScroll}/>
   </div>
 </div>
 
 <div className="elab" id='challenges'>
     <h2>E-Lab Challenges</h2><br />
     <p>In E-Lab, we gain valuable leadership skills and tools to help us pursue our missions effectively. Through hands-on challenges and collaborative projects, we engage deeply with our communities, driving real impact and personal growth.</p>
     <div className="cards">
       <div className="card">
         <img style={{objectFit:"cover"}} src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730985313/Brainy%20badgers/WhatsApp_Image_2024-11-06_at_10.27.04_2e252122_wy6btm.jpg'/>
         <div>
           <span>1</span><br/>
           <h2>Introduction</h2>
           <p>Each team member made an elevator pitch including what they're passionate about, why, and what they want to do to solve it, as well as what they bring to the team. <br/> <a style={{textDecoration:"underline", color:"burlywood"}} href='https://youtu.be/11ga043_Bmk' target='_blank' rel='noopener noreferrer'>Watch the Video</a></p>
         </div>
         
       </div>
       <div className="card">
         <img style={{objectFit:"cover"}} src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731012086/Brainy%20badgers/news_gkw4tw.jpg'/>
         <div>
           <span>2</span><br/>
           <h2>Discover Africa</h2>
           <p>We learnt more about the Kamba community from Kenya and made a video where each member presented what the learnt about that community.<br/> <a style={{textDecoration:"underline", color:"burlywood"}} href='https://www.youtube.com/watch?v=-RBVegZYM0s' target='_blank' rel='noopener noreferrer'>Watch the Video</a></p>
         </div>
         
       </div>
       <div className="card">
         <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730747289/Brainy%20badgers/WhatsApp_Image_2024-10-15_at_15.35.10_4f4baadf_idet7p.jpg'/>
         
         <div>
           <span>3</span><br/>
           <h2>HELP-LAB</h2>
           <p>We visited Kenza International School to conduct a workshop on public speaking, equipping primary students with essential skills to enhance their speaking abilities and boost their confidence.<br/> <a style={{textDecoration:"underline", color:"burlywood"}} href='https://www.youtube.com/watch?v=-RBVegZYM0s' target='_blank' rel='noopener noreferrer'>Watch the Video</a></p>
         </div>
         
       </div>
       <div className="card" style={{marginTop:"150px"}}>
         <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730747092/Brainy%20badgers/20241021_163507_v5xxcg.jpg'/>
         <div>
           <span>4</span><br/>
           <h2>Hunt for Treasure</h2>
           <p>We conducted an interview with the CEO of AgroSeeds, gaining valuable insights into Rwanda's agriculture industry and the unique challenges and opportunities it presents.<br/> <a style={{textDecoration:"underline", color:"burlywood"}} href='https://www.youtube.com/watch?v=zoIu-h-8YTQ' target='_blank' rel='noopener noreferrer'>Watch the Video</a></p>
         </div>
         
       </div>
       <div className="card" style={{marginTop:"150px"}}>
         <img style={{objectFit:"cover"}} src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731011692/Brainy%20badgers/WhatsApp_Image_2024-11-05_at_17.52.42_69776463_adp1ag.jpg'/>
         <div>
           <span>5</span><br/>
           <h2>Launch Your Mission</h2>
           <p>We delivered a compelling pitch that outlined our team's identity, highlighted the challenges we aim to address, and presented our innovative solution designed to tackle these issues effectively.<br/> <a style={{textDecoration:"underline", color:"burlywood"}} href='https://youtu.be/wLsUF293-Sc' target='_blank' rel='noopener noreferrer'>Watch the Video</a></p>
         </div>
         
       </div>
       <div className="card" style={{marginTop:"150px"}}>
         <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730740943/Brainy%20badgers/hom_zxccby.jpg'/>
         <div>
           <span>6</span><br/>
           <h2>Digital Print</h2>
           <p>We developed a dynamic website that showcases our E-LAB journey, featuring detailed accounts of the activities we undertook and the experiences we gained along the way.</p>
         </div>
         
       </div>
       
     </div>
   </div>
 
 {/* <div className="ourteam" id='team'>
   <h2>Meet The Team</h2>
   <div className="imagecards">
     <div className="cardteam">
       <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg'/>
       <div><span style={{fontWeight:"bold"}}>Erick Kanja</span> <br/><span style={{color:"#444"}}>Team Lead, keeping the team aligned, equipped, and moving forward toward our shared vision.</span> <span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
     </div>
     <div className="cardteam">
       <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
       <div><span style={{fontWeight:"bold"}}>Lydivine Umutesi</span> <br/><span style={{color:"#444"}}>Creative storyteller, capturing every milestone and sharing our mission with the world</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
     </div>
     <div className="cardteam">
       <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730643132/Brainy%20badgers/deni_t0l076.jpg'/>
       <div><span style={{fontWeight:"bold"}}>Dennis Nyiringango</span> <br/><span style={{color:"#444"}}>The energy engine, keeping spirits high and our message uplifting with vibes and music.</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
     </div>
     <div className="cardteam">
       <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586244/Brainy%20badgers/mee_gjvrqp.jpg'/>
       <div><span style={{fontWeight:"bold"}}>Acele Happy</span> <br/><span style={{color:"#444"}}>Tech genius behind our project, building and refining our prototype into an impactful tool.</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
     </div>
     <div className="cardteam">
       <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
       <div><span style={{fontWeight:"bold"}}>Amazing Mkonta</span> <br/><span style={{color:"#444"}}>Dynamic communicator, bringing passion and clarity to our message at every opportunity.</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
     </div>
     <div className="cardteam">
       <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
       <div><span style={{fontWeight:"bold"}}>Kevin Runanira</span> <br/><span style={{color:"#444"}}>Strategic planner and our steady hand, navigating us through every challenge with finesse.</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
     </div>
   </div>
 
   
 </div> */}
 <div className="ourteamm" id="team">
  <h2>Meet The Team</h2>
  <div className="imagecards">
    <div className="cardteamm">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg' alt="Erick Kanja" />
      <div className="teamInfo">
        <span className="name">Erick Kanja</span>
        <span className="role">Team Lead, keeping the team aligned, equipped, and moving forward toward our shared vision.</span>
        <div className="socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="cardteamm">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg' alt="Erick Kanja" />
      <div className="teamInfo">
        <span className="name">Lydivine Umutesi</span>
        <span className="role">Creative storyteller, capturing every milestone and sharing our mission with the world</span>
        <div className="socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="cardteamm">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730643132/Brainy%20badgers/deni_t0l076.jpg' alt="Erick Kanja" />
      <div className="teamInfo">
        <span className="name">Dennis Nyiringango</span>
        <span className="role">The energy engine, keeping spirits high and our message uplifting with vibes and music.</span>
        <div className="socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="cardteamm">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586244/Brainy%20badgers/mee_gjvrqp.jpg' alt="Erick Kanja" />
      <div className="teamInfo">
        <span className="name">Acele Happy</span>
        <span className="role">Software engineer behind our project, building and refining our prototype into an impactful tool.</span>
        <div className="socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="cardteamm">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg' alt="Erick Kanja" />
      <div className="teamInfo">
        <span className="name">Amazing Mkonta</span>
        <span className="role">Dynamic communicator, bringing passion and clarity to our message at every opportunity.</span>
        <div className="socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="cardteamm">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg' alt="Erick Kanja" />
      <div className="teamInfo">
        <span className="name">Kevin Runanira</span>
        <span className="role">Strategic planner and our steady hand, navigating us through every challenge with finesse.</span>
        <div className="socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    {/* Repeat the above card for each team member */}
  </div>
</div>
 <div className="contact" id='contact'>
   <div className='icons'>
     <span style={{display:"flex", alignItems:"center", margin:"10px", fontSize:"1.2em",color:"#fff"}}><FaLocationPin/> ALU, Kigali Rwanda</span>
     <span style={{display:"flex", alignItems:"center", margin:"10px", fontSize:"1.2em",color:"#fff"}}><AiOutlineMail/> brainybadgersalu@gmail.com</span>
     <span style={{display:"flex", alignItems:"center", margin:"10px", fontSize:"1.2em",color:"#fff"}}><FaPhone/>+2507888888</span>
     <span style={{display:"flex", alignItems:"center", margin:"10px", fontSize:"1.2em",color:"#fff"}}><FaInstagram/>_brainy_badgers_alu</span>
     <span style={{display:"flex", alignItems:"center", margin:"10px", fontSize:"1.2em",color:"#fff"}}><FaYoutube/>brainy_badgers_alu</span>
   </div>
   <div className='form'>
     <h2>Get in Touch</h2>
     <p>Our team would love to hear from you!</p>
     <form action="#">
     {errors.name && <span style={{color:"red"}}>{errors.name}</span>}
           <input
             type="text"
             placeholder="Full Name"
             name="name"
             onChange={onchange}
             required
           />
           
           {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
           <input
             type="email"
             placeholder="Email"
             name="email"
             onChange={onchange}
             required
           />
           
           {errors.subject && <span style={{color:"red"}}>{errors.subject}</span>}
           <input
             type="text"
             placeholder="Subject"
             name="subject"
             onChange={onchange}
             required
           />
           
           {errors.message && <span style={{color:"red"}}>{errors.message}</span>}
           <textarea
             name="message"
             id="message"
             cols="30"
             rows="10"
             placeholder="Message"
             onChange={onchange}
             required
           ></textarea>
           
         </form>
         <button type='submit' onClick={onSubmit}>Send</button>
   </div>
 </div>
       <ScrollToTop
       smooth="true"
       className="scrolltotop"
       width="20"
       height="20"
       color="#d7ad46"
       />
 
 <div className="footer">
   <div className="footercontent">
   <div>
   <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1731020833/Brainy%20badgers/Group_9_qeff5g.png' alt='logo' style={{position:"relative", right:"40px",height:"50%",width:"100px"}}/>
   <p style={{width:"250px",position:"relative",right:"80px",color:"#444",fontSize:"13px",textAlign:"left",bottom:"15px"}}>We are a diverse team of Entrepreneurs with a shared mission to transform Rwanda's agriculture.</p>
   </div>

   <div>
    <div style={{display:"flex", flexDirection:"row"}}>
    <div style={{marginTop:"30px"}}>
       <h3 style={{fontSize:"1.2em", color:"#111", marginBottom:"4px", fontWeight:"bold"}}>Quick Links</h3>
       <span style={{color:"#444", fontSize:"0.9em"}}><a href="#about">About Us</a></span><br/>
       <span style={{color:"#444", fontSize:"0.9em"}}><a href="#challenges">Challenges</a></span><br/>
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
   <span style={{color:"#777"}}>Copyright &copy; 2024. Brainy Badgers</span></div>
     </div>
 
      )
}

export default Landing