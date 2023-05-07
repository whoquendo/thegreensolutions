import React from 'react';
import ReactPlayer from 'react-player';



const Realisations = () => {
  return (
    <>
    <div>
        <h1>Quelque Réalisations</h1>
    </div>
    <section>
    <div>
        <ReactPlayer
          url={video}
          className='react-player'
          playing='true'    
          width='100%'
          height='100%'
          controls='true'
        />       
      </div>
    </section>
    </>
  )
}

export default Realisations