import React, { useState } from "react";
import "./Testimonials.css"; // Import the CSS file for styling
import { Ratings } from "./Ratings";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service is amazing! Highly recommended. This service is amazing! Highly recommended.",
    image: "/img/profile-img.jpg", // Replace with a real image URL
    rating : 5
  },
  {
    name: "Jane Smith",
    feedback: "Fantastic experience. Will use it again for sure.Fantastic experience. Will use it again for sure.",
    image: "https://via.placeholder.com/150", // Replace with a real image URL
    rating : 4
  },
  {
    name: "Michael Johnson",
    feedback: "Great value and excellent support team! Great value and excellent support team!",
    image: "https://via.placeholder.com/150", // Replace with a real image URL
    rating : 3
  },
];

export const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length 
    );
  };

  return (
      <div className="testimonial-slider">
        <i class='bx bx-chevron-left testimonial-arrow' onClick={handlePrev}></i>
      <div className="testimonial-card flex-col">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="testimonial-image"
        />
        <p className="testimonial-feedback">
          "{testimonials[currentIndex].feedback}"
        </p>
        <div> <Ratings ratings={testimonials[currentIndex].rating}/> </div>
        <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
      </div>
        <i class='bx bx-chevron-right testimonial-arrow' onClick={handleNext}></i>
    </div>
  );
};

