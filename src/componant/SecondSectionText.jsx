import React from 'react';

const SecondSectionText = (props) => {
  return (
    <div className='container'>
      <div className='bold_normal_text_box w-50 mt-0'>
        <h2 className='second_section_text'><span>{props.textBold}</span> {props.textNormal}</h2>
      </div>
    </div>
  )
}

export default SecondSectionText;
