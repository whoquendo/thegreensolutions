import React, { useState } from "react";
import images from "../exports/images";
import styles from "../styles/carousel.css";
import logo from '../assets/imagesConstruction/logo_thegreensolutions.png'

const Carousel = () => {
  const [actualImage, setActualImage] = useState(0);
  const imagesLength = images?.length;

  if (!Array.isArray(images) || imagesLength === 0) return;

  const nextImage = () => {
    setActualImage(actualImage === imagesLength - 1 ? 0 : actualImage + 1);
  };

  const prevImage = () => {
    setActualImage(actualImage === 0 ? imagesLength - 1 : actualImage - 1);
  };

  return (
    <>
 
      <div className="imgflex">
        {images.map((image, index) => {
          return (
            <div>
              {actualImage === index && (
                <div className="item">
                 <button onClick={prevImage} className="button-carousel">
                    <span>Previous</span>
                  </button>
                  <div className="container-images">
                    <div>
                    <img
                    className="img-carrousel"
                    key={index}
                    src={image.image}
                    alt={index}
                  />
                    </div>
                 <div>
                 <img
                    className="img-carrousel"
                    key={index}
                    src={image.image}
                    alt={index+1}
                  />
                 </div>
                <div>
                <img
                    className="img-carrousel"
                    key={index}
                    src={image.image}
                    alt={index+2}
                  />
                </div>

                  </div>
                 
                      <button onClick={nextImage} className="button-carousel">
      <span></span>
      <span>Next</span>
    </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
