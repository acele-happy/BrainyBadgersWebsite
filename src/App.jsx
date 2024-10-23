import './index.css';
import './App.css'
function App() {

  return (
    <div className='container'>
       <div className="navbar flex justify-between items-center px-4 py-2">
  <h1 className="bb">Brainy<span style={{color:"#d7ad46"}}>Badgers</span></h1>
  <ul className="flex space-x-8">
    <li><a href="#" >Home</a></li>
    <li><a href="#" >About Us</a></li>
    <li><a href="#" >Challenges</a></li>
    <li><a href="#" >Contact Us</a></li>
  </ul>
</div>

<div className="home">
    <div>
    <h1>The Brainy <br/>Badgers</h1>
    <p>Our think tank mission is to transform the agricultural landscape through innovative strategies that drive job creation.</p>
    <button>Contact Us</button>
    </div>
    <div className='imagecircle'>
    <div class="scale" id="one"></div>
  <div class="scale" id="two"></div>
  <div class="scale" id="three"></div>
  <div class="scale" id="four"></div>
    </div>

</div>

<div className="aboutus">

<div className='abtimg'>
  <img src='src\assets\bb.jpg' alt="pic"/>
</div>
  <div className='about'> 
  <h2>ABOUT US</h2>
  <p>We are a passionate and diverse team of six innovators from all corners of Africa, driven by a shared mission to tackle some of the most pressing challenges in agriculture. With a perfect balance of gender and a variety of cultural and educational backgrounds, our team reflects the spirit of collaboration and inclusion that defines our journey.<br/><br /> Meeting at the African Leadership University (ALU) in Cohort 2 of the E-Lab program, we decided to unite our strengths, knowledge, and experiences to address agricultural challenges, with a focus on job creation and sustainable development. Agriculture is at the heart of Africa’s economy, and we believe that innovative solutions can unlock new opportunities for growth, efficiency, and resilience across the continent.<br/><br /> Our journey is just beginning, and we are excited about what lies ahead. With the support of ALU and the collaborative spirit within our team, we are confident that our solutions will contribute to transforming agriculture and creating more jobs for future generations. The best is yet to come, and we invite you to follow our progress as we work towards a brighter, more sustainable future.</p>
  <button>Meet Our Team!</button>
  </div>
</div>

<div className="ourteam">
  <h2>Meet The Team</h2>
  <div className="imagecards">
    <div className="card">
      <img src='src\assets\w.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Erick Kanja</span> <br/><span style={{color:"#222"}}>Team Lead</span></div>
      {/* <span></span> */}
    </div>
    <div className="card">
      <img src='src\assets\w.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Lydivine Umutesi</span> <br/><span style={{color:"#222"}}>Team Lead</span></div>
      {/* <span></span> */}
    </div>
    <div className="card">
      <img src='src\assets\w.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Dennis Nyiringango</span> <br/><span style={{color:"#222"}}>Team Lead</span></div>
      {/* <span></span> */}
    </div>
    <div className="card">
      <img src='src\assets\me.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Acele Happy</span> <br/><span style={{color:"#222"}}>Team Lead</span></div>
      {/* <span></span> */}
    </div>
    <div className="card">
      <img src='src\assets\w.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Amazing Mkonta</span> <br/><span style={{color:"#222"}}>Team Lead</span></div>
      {/* <span></span> */}
    </div>
    <div className="card">
      <img src='src\assets\w.jpg'/>
      <div><span style={{fontWeight:"bold"}}>Kevin Runanira</span> <br/><span style={{color:"#222"}}>Team Lead</span></div>
      {/* <span></span> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default App
