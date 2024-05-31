import React from 'react';
import './Bien.scss'; // Assuming you've renamed Carousel.scss to Bien.scss
interface BienProps {
  images: string[];
}
const Bien: React.FC<BienProps> = ({ images }) => {
  return (
    <div id="bienExampleIndicators" className="bien slide" data-bs-ride="bien">
      <div className="bien-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#bienExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="bien-inner">
        {images.map((src, index) => (
          <div key={index} className={`bien-item ${index === 0 ? 'active' : ''}`}>
            <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="bien-control-prev" type="button" data-bs-target="#bienExampleIndicators" data-bs-slide="prev">
        <span className="bien-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="bien-control-next" type="button" data-bs-target="#bienExampleIndicators" data-bs-slide="next">
        <span className="bien-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Bien;