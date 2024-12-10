import "./Testimonials.css"; // CSS file for styling

export const Ratings = ({ ratings , totalStars = 5}) => {
  
    return (
        <div className="fixed-star-rating">
          {[...Array(totalStars)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < ratings ? "active" : ""}`}
            >
              <i className="bx bxs-star"></i>
            </span>
          ))}
        </div>
      );
    
};

