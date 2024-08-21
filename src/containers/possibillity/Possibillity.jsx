import React from 'react'
import './possibillity.css'
import possibilityImage from '../../assets/possibility.png'

const Possibillity = () => {
  return (
    <div className='possibillity section_padding' id='possibillity'>
      <div className='pos_image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='pos_content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibillity