import React from 'react';

const SecondSectionText = (props) => {
  return (
      <div style={{width:`${props.width}`,margin:`${props.margin}`,textAlign:`${props.align}`}}>
        <h2 className='second_section_text'><span>{props.textBold}</span> {props.textNormal}</h2>
      </div>
  )
}

export default SecondSectionText;
