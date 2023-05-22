import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import images from '../exports/images';
import logo from '../assets/imagesConstruction/logo_thegreensolutions.png'
import '@styles/banner.css'

const Banner = () => {
 const data =images;

      const captionStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
        
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      return (
        <>
        <div className="App">
        <div>
        </div>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={data}
                time={1500}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                  position: "relative"
                }}
              />
            </div>
          </div>
          </>
      );
}

export default Banner