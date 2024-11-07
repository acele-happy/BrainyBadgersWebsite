import React, { useState } from 'react';
import './Slider.css'; // import custom CSS

function Slider({teamScroll}) {
  const slides = [
    {
      title: "Get To Know Us",
      content: "We are a passionate and diverse team of six innovators from all corners of Africa, driven by a shared mission to tackle some of the most pressing challenges in agriculture. With a perfect balance of gender and a variety of cultural and educational backgrounds, our team reflects the spirit of collaboration and inclusion that defines our journey. Our journey is just beginning, and we are excited about what lies ahead. With the support of ALU and the collaborative spirit within our team, we are confident that our solutions will contribute to transforming agriculture and creating more jobs for future generations.",
      button: "Meet Our Team!"
    },
    {
      title: "Problem Statement",
      content: `The agricultural sector in Africa faces numerous and complex challenges, ranging from limited access to resources like quality seeds, fertilizers, and advanced farming equipment to the reliance on outdated techniques that hinder productivity. Many small-scale farmers struggle to obtain the necessary knowledge, technology, and support needed to improve crop yields and adopt sustainable practices. Climate change further exacerbates these issues, leading to unpredictable weather patterns, soil degradation, and increased pest infestations, all of which threaten food security across the continent.`
    },
    {
      title: "Our Mission",
      content: "Our mission is to transform the agricultural sector by developing cutting-edge solutions that tackle its most pressing challenges and foster economic growth through job creation. We envision a future where agriculture not only sustains communities but also empowers them by creating opportunities for individuals to thrive in meaningful, sustainable careers. Our commitment to this mission is rooted in our belief in the power of collaboration, rigorous research, and steadfast dedication.",
    },
    {
      title: "Our Solution",
      content: "Our solution is a mobile application designed to engage and motivate young people to learn more about agriculture through interactive challenges. These challenges, provided by our partners, offer an exciting way to acquire agricultural knowledge and skills. With each completed challenge, users earn points that can be redeemed for discounts on seeds, manure, and other essential resources, making learning rewarding and beneficial for their farming journey.",
      button: "Prototype"
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const navigate = ()=>{
    window.location.href = "https://www.figma.com/proto/fEM0FIUtpFFRp5Tp8H7WKJ/Prototype-BB?node-id=8-338&node-type=frame&t=6kgLkunxygFrfHm4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A338"
  }

  return (
    <div className="carousel">
      <div className="carousel-content" style={{ transform: `translateX(${currentSlide}%)` }}>
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].content}</p>
        {slides[currentSlide].button && <button onClick={navigate}>{slides[currentSlide].button}</button>}
      </div>
      <div className="carousel-controls">
        <span style={{marginRight:"60px",cursor:"pointer"}} onClick={prevSlide}>&#10094;</span>
        <span style={{marginRight:"60px",cursor:"pointer"}} onClick={nextSlide}>&#10095;</span>
      </div>
    </div>
  );
}

export default Slider;
