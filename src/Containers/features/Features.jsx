import React from 'react'
import { Feature } from '../../Components';
import './features.css'

const featuresData=[
  {
    title:'Improving and distrusts instantly',
    text:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quaerat quae necessitatibus culpa, asperiores dolorum!'
  },
  {
    title:'Become the tended active',
    text:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quaerat quae necessitatibus culpa, asperiores dolorum!'
  },
  {
    title:'Message or am nothing',
    text:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quaerat quae necessitatibus culpa, asperiores dolorum!'
  },
  {
    title:'Really boy law county',
    text:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quaerat quae necessitatibus culpa, asperiores dolorum!'
  },
];



const Features = () => {
  return (
  
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step Into the Future Today & Make It Happen.
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3__features-container">
         {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title+index}/>
         ))}
      </div>
      </div>
  )
}

export default Features