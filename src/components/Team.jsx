import React from 'react'
import './Team.css'

const teamMembers = [
    {
        imgUrl: "https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg",
        name: 'Erick Kanja',
        position: 'Production Designer'
    },

    {
        imgUrl: "https://res.cloudinary.com/dweikgdwq/image/upload/v1730741127/Brainy%20badgers/erick_llxixv.jpg",
        name: 'Lydivine Umutesi',
        position: 'Product Designer'
    },

    {
        imgUrl: "https://res.cloudinary.com/dweikgdwq/image/upload/v1730643132/Brainy%20badgers/deni_t0l076.jpg",
        name: 'Dennis Nyiringango',
        position: 'Customer Service'
    },

    {
        imgUrl: "https://res.cloudinary.com/dweikgdwq/image/upload/v1730586244/Brainy%20badgers/mee_gjvrqp.jpg",
        name: 'Acele Happy',
        position: 'Project Leader'
    },
    {
        imgUrl: "https://res.cloudinary.com/dweikgdwq/image/upload/v1730643132/Brainy%20badgers/deni_t0l076.jpg",
        name: 'Amazing Mkonta',
        position: 'Customer Service'
    },

    {
        imgUrl: "https://res.cloudinary.com/dweikgdwq/image/upload/v1730586244/Brainy%20badgers/mee_gjvrqp.jpg",
        name: 'Kevin Runanira',
        position: 'Project Leader'
    },
]

const Team = () => {
    return (
        <div class="container">
 
        <div class="row">
       
                    {/* <div class="col-md-12 text-center">

                          <h2 class="section-title">The Team Behind Pacifico</h2>

                          <p class="section-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi amet itaque impedit. Non, ad deleniti eius vitae beatae dolore, nulla illum repellendus modi dolor in iusto, fugit aliquam expedita!</p>
                          
                    </div>  */}
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
                      <h3>JOHNATHAN HAWKINS</h3>            
                      <div class="team-info"><p>Head of SEO</p></div>
                      <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter"></i>
                        </a></li>
                          
                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest"></i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook"></i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />
                     
                      <h3>ALEXANDRA SMITHS</h3>
                      
                      <div class="team-info"><p>SEO Specialist</p></div>

                      <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
                     
                      <h3>ELISA JOHANSON</h3>
                      
                      <div class="team-info"><p>Marketing Manager</p></div>

                      <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
   
    <h3>ELISA JOHANSON</h3>
    
    <div class="team-info"><p>Marketing Manager</p></div>

    <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

    <ul class="team-icon">
    
        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
        
        <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
        
        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
        
        <li><a href="#" class="dribble">
          <i class="fa fa-dribbble"></i>
      </a></li>
        
    </ul>
    
</div>

</div> 
<div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
   
    <h3>ELISA JOHANSON</h3>
    
    <div class="team-info"><p>Marketing Manager</p></div>

    <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

    <ul class="team-icon">
    
        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
        
        <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
        
        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
        
        <li><a href="#" class="dribble">
          <i class="fa fa-dribbble"></i>
      </a></li>
        
    </ul>
    
</div>

</div> 
<div class="col-sm-6 col-md-4">

<div class="team-item">

    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
   
    <h3>ELISA JOHANSON</h3>
    
    <div class="team-info"><p>Marketing Manager</p></div>

    <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

    <ul class="team-icon">
    
        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
        
        <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
        
        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
        
        <li><a href="#" class="dribble">
          <i class="fa fa-dribbble"></i>
      </a></li>
        
    </ul>
    
</div>

</div> 
        
        </div> 
    
    </div>
    )
}

export default Team