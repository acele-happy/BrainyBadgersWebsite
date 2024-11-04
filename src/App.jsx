import './index.css';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram,FaLinkedin,FaPhone,FaTwitter, FaVoicemail, FaYoutube} from "react-icons/fa"
import { useState,useRef,useEffect } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Slider from './components/Slider';
import Button from "react-bootstrap/Button"
import ReactPlayer from 'react-player';
import AOS from 'aos'

// import {} 
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
    axios
      // .post("https://portifolio-backend-u7ba.vercel.app/contactme", formData)
      .post("https://portifolio-backend-1-sbzy.onrender.com/contactme", formData)
      .then((data) => {
        window.location.reload()
        console.log("dataaa "+data)
        return;
      })
      .catch((ex) => console.log("erorrrr "+ex));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a 1s duration
  }, []);

  return (
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
    <li onClick={handleClickSroll}><a href="#prototype" >PROTOTYPE</a></li>
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
        {/* <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586250/Brainy%20badgers/home_qwfhh7.jpg'/> */}
        <iframe
        width="100%"
        height="250px"
        src="https://www.youtube.com/embed/qDU1IOTbhVM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <div>
          <span>1</span><br/>
          <h2>Introduction</h2>
          <p>Each team member made an elevator pitch including what they're passionate about, why, and what they want to do to solve it, as well as what they bring to the team.</p>
        </div>
        
      </div>
      <div className="card">
        {/* <img src='src\assets\home.jpg'/> */}
       {/* <ReactPlayer url="https://www.youtube.com/watch?v=qDU1IOTbhVM" width="300px" height="250px" /> */}
       <iframe
        width="100%"
        height="250px"
        src="https://www.youtube.com/embed/qDU1IOTbhVM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <div>
          <span>2</span><br/>
          <h2>Discover Africa</h2>
          <p>We learnt more about the Kamba community from Kenya and made video where each member presented what the learnt about that community.</p>
        </div>
        
      </div>
      <div className="card">
        {/* <img src='src\assets\pri.jpg'/> */}
        <iframe
        width="100%"
        height="250px"
        src="https://www.youtube.com/embed/qDU1IOTbhVM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <div>
          <span>3</span><br/>
          <h2>HELP-LAB</h2>
          <p>We went to Kenza International School where we taught primary students more about public speaking and how they can improve theirs.</p>
        </div>
        
      </div>
      <div className="card" style={{marginTop:"150px"}}>
        {/* <img src='src\assets\home.jpg'/> */}
        <iframe
        width="100%"
        height="250px"
        src="https://www.youtube.com/embed/qDU1IOTbhVM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <div>
          <span>4</span><br/>
          <h2>Hunt for Treasure</h2>
          <p>Each team member made an elevator pitch including what they're passionate about, why, and what they want to do to solve it, as well as what they bring to the team.</p>
        </div>
        
      </div>
      <div className="card" style={{marginTop:"150px"}}>
        {/* <img src='src\assets\home.jpg'/> */}
        <iframe
        width="100%"
        height="250px"
        src="https://www.youtube.com/embed/qDU1IOTbhVM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <div>
          <span>5</span><br/>
          <h2>Launch Your Mission</h2>
          <p>We learnt more about the Kamba community from Kenya and made video where each member presented what the learnt about that community.</p>
        </div>
        
      </div>
      <div className="card" style={{marginTop:"150px"}}>
        <img src='src\assets\home.jpg'/>
        <div>
          <span>6</span><br/>
          <h2>Digital Print</h2>
          <p>We went to Kenza International School where we taught primary students more about public speaking and how they can improve theirs.</p>
        </div>
        
      </div>
      
    </div>
  </div>

<div className="ourteam" id='team'>
  <h2>Meet The Team</h2>
  <div className="imagecards">
    <div className="cardteam">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Erick Kanja</span> <br/><span style={{color:"#222"}}>Team Lead</span> <span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
      {/* <span></span> */}
    </div>
    <div className="cardteam">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Lydivine Umutesi</span> <br/><span style={{color:"#222"}}>Team Lead</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
      {/* <span></span> */}
    </div>
    <div className="cardteam">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730643132/Brainy%20badgers/deni_t0l076.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Dennis Nyiringango</span> <br/><span style={{color:"#222"}}>Musician/Artist</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
      {/* <span></span> */}
    </div>
    <div className="cardteam">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586244/Brainy%20badgers/mee_gjvrqp.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Acele Happy</span> <br/><span style={{color:"#222"}}>Full-stack developer</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
      {/* <span></span> */}
    </div>
    <div className="cardteam">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Amazing Mkonta</span> <br/><span style={{color:"#222"}}>Team Lead</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
      {/* <span></span> */}
    </div>
    <div className="cardteam">
      <img src='https://res.cloudinary.com/dweikgdwq/image/upload/v1730586247/Brainy%20badgers/w_sak97h.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Kevin Runanira</span> <br/><span style={{color:"#222"}}>Team Lead</span><span style={{display:"flex"}}><a href='#' style={{marginRight:"10px"}}><FaInstagram/></a> <a href='#' style={{marginRight:"10px"}}><FaTwitter/></a> <a href='#'><FaLinkedin/></a></span></div>
      {/* <span></span> */}
    </div>
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
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={onchange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={onchange}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={onchange}
            required
          />
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
  <img src='src\assets\logo.png' alt='logo' style={{position:"relative", right:"80px",height:"60%"}}/>
  
  <div>
   <div style={{display:"flex", flexDirection:"row"}}>
   <div style={{marginTop:"30px"}}>
      <h3 style={{fontSize:"1.2em", color:"#111", marginBottom:"4px", fontWeight:"bold"}}>Quick Links</h3>
      <span style={{color:"#444", fontSize:"0.9em"}}>Mission</span><br/>
      <span style={{color:"#444", fontSize:"0.9em"}}>Team</span>
    </div>
    <div style={{marginLeft:"160px",marginTop:"30px", marginBottom:"4px",}}>
      <h3 style={{fontSize:"1.2em", color:"#111",fontWeight:"bold"}}>Socials</h3>
      <span style={{color:"#444", fontSize:"0.9em"}}>Instagram</span><br/>
      <span style={{color:"#444", fontSize:"0.9em"}}>Youtube</span>
    </div>
    <div style={{marginLeft:"160px",marginTop:"30px", marginBottom:"4px"}}>
      <h3 style={{fontSize:"1.2em", color:"#111",fontWeight:"bold"}}>Projects</h3>
      <span style={{color:"#444", fontSize:"0.9em"}}>AgroPoints</span><br/>
    </div>
  </div>
   </div>
  </div>
  <div className="line"></div>
  <span style={{color:"#777"}}>Copyright &copy; 2024. Brainy Badgers</span></div>
    </div>
  )
}

export default App
