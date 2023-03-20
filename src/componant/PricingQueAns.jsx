import React from 'react';

const PricingQueAns = (props) => {
  return (
    <>
      <div className='pricing_QA'>
        <p className='pricing_que_text'>{props.que}</p>
        <p className='pricing_ans_text'>{props.ans}</p>
      </div>
    </>
  )
}

export default PricingQueAns;
