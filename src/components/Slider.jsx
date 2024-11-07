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
      content: `According to the National Institute of Statistics of Rwanda, approximately one person is unemployed for every eight people in the labor force in Rwanda. Although agriculture is a significant sector, only 15% of Rwandan youth are involved. Limited incentives, lack of innovation, and biased perceptions deter young people from pursuing careers in agriculture. This high rate of unemployment results in rising poverty in the country, further highlighting the need for a comprehensive solution to reduce the unemployment rate to 6% by 2040.`
    },
    {
      title: "Our Mission",
      content: "Our mission is to empower youth in agriculture through a digital platform that rewards sustainable practices, creating pathways to rewarding careers and resilient farming communities.",
    },
    {
      title: "Our Solution",
      content: "A web platform / mobile App that engages youth in agriculture through gamified farming challenges, rewarding them with AgroPoints for essentials like seeds and tools. By partnering with agro-dealers and government programs, it reduces financial barriers and builds a skilled, motivated agricultural workforce in Rwanda.",
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
        {slides[currentSlide].button && <button onClick={slides[currentSlide].title==="Get To Know Us"? teamScroll:navigate}>{slides[currentSlide].button}</button>}
      </div>
      <div className="carousel-controls">
        <span style={{marginRight:"60px",cursor:"pointer"}} onClick={prevSlide}>&#10094;</span>
        <span style={{marginRight:"60px",cursor:"pointer"}} onClick={nextSlide}>&#10095;</span>
      </div>
    </div>
  );
}

export default Slider;
