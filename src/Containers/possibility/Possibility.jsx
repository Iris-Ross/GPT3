import React from 'react'
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">The Possibilities are beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis corporis veniam fuga, hic rem eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum voluptate praesentium exercitationem iusto! Distinctio, impedit!</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility