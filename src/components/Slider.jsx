import React, { useState } from 'react';
import './Slider.css'; // import custom CSS

function Slider({teamScroll}) {
  const slides = [
    {
      title: "Get To Know Us",
      content: "We are a passionate and diverse team of six innovators from all corners of Africa, driven by a shared mission to tackle some of the most pressing challenges in agriculture. With a perfect balance of gender and a variety of cultural and educational backgrounds, our team reflects the spirit of collaboration and inclusion that defines our journey. Our journey is just beginning, and we are excited about what lies ahead. With the support of ALU and the collaborative spirit within our team, we are confident that our solutions will contribute to transforming agriculture and creating more jobs for future generations. The best is yet to come, and we invite you to follow our progress as we work towards a brighter, more sustainable future.",
      button: "Meet Our Team!"
    },
    {
      title: "Problem Statement",
      content: "The agricultural sector in Africa faces numerous challenges, from limited resources to outdated techniques. Our team is focused on finding solutions that can overcome these barriers and create a more sustainable and productive agricultural ecosystem."
    },
    {
      title: "Our Mission",
      content: "Our mission is to transform agriculture by developing innovative solutions that address critical challenges and contribute to job creation. We believe in a sustainable future and are committed to making a lasting impact in the sector through collaboration, research, and dedication.",
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

  return (
    <div className="carousel">
      <div className="carousel-content">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].content}</p>
        {slides[currentSlide].button && <button onClick={teamScroll}>{slides[currentSlide].button}</button>}
      </div>
      <div className="carousel-controls">
        <span style={{marginRight:"60px",cursor:"pointer"}} onClick={prevSlide}>&#10094;</span>
        <span style={{marginRight:"60px",cursor:"pointer"}} onClick={nextSlide}>&#10095;</span>
      </div>
    </div>
  );
}

export default Slider;
