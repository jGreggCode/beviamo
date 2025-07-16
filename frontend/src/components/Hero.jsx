import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Experience Premium Coffee",
      subtitle: "Anytime, Anywhere",
      img: assets.hero_banner,
    },
    {
      title: "Browse, Brew, and Enjoy",
      subtitle: "Your Coffee Journey Starts Here",
      img: assets.hero_banner2,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const goBack = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="">
      {slides.map((slide, index) => (
        <HeroCarousel
          key={index}
          img={slide.img}
          cn={`${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          title={slide.title}
          subtitle={slide.subtitle}
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          goBack={goBack}
          goNext={goNext}
        />
      ))}
    </div>
  );
};

export default Hero;
