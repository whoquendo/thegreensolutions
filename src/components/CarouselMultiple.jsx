import React from "react";
import { Carousel } from "react-carousel-minimal";
import collages from "../exports/collages";

const CarouselMultiple = () => {
  const data = collages;

  const captionStyle = {
    fontSize: "1em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container-general-carousel">
        <div className="container-carousel" >
      
       
          <Carousel
            data={data}
            time={1500}
            width="650px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#5bbd8a"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
              position: "relative",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CarouselMultiple;
