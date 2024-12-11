import "./Testimonials.css"; // Import the CSS file for styling
import { TestimonialsSlider } from "./TestimonialsSlider";

export const Testimonials = () => {

  return (
    <div className="testimonials flex-col">
      <div className="testimonials-title flex-col">
        <h1>Testimonials</h1>
        <p className="testimonials-subtitle">What Our Clients Say</p>
      </div>
      <div className="testimonials-slider-container">
        <TestimonialsSlider/>
      </div>

    </div>
  );
};

