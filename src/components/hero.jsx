import React from 'react'
// import ForestTrees from './imgs/forest-trees.png' 

const hero = () => {
  return (
    <>
      <div className="hero">
        <img src={process.env.PUBLIC_URL + "svgs/flat-mountains.svg"} alt="svgs" />
        <img src={process.env.PUBLIC_URL + "images/forest-trees.png"} alt="forest trees" />
        <img src={process.env.PUBLIC_URL + "svgs/wave-haikei.svg"} alt="wave svg" />
      </div>
    </>
  )
}

export default hero;