import React from 'react';

const AboutGuideText = (props) => {
  return (
    <>
      <div className='about_guide_main'>
        <h3 className='about_guide_number'>{props.num}</h3>
        <h3 className='about_guide_heading'>{props.heading}</h3>
        <p className='about_guide_dis'>{props.dis}</p>
      </div>
    </>
  )
}

export default AboutGuideText;
