import { useState } from "react";

export const ImageCrousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = images.length;

  const handleLeftClick = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index)
  };

  return (
    <div>
      <div className="carosel">
        <img
          className="caroselImg"
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
        ></img>
        <button className="navButtonLeft" onClick={handleLeftClick}>
          {"<"}
        </button>
        <button className="navButtonRight" onClick={handleRightClick}>
          {">"}
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <Dot
              key={index}
              selected={currentImageIndex === index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Dot({ selected, onClick }) {
  return (
    <div
      className={`dot ${selected ? "dot--selected" : ""}`}
      onClick={onClick}
    ></div>
  );
}
