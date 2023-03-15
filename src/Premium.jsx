import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';

const Premium = () => {
  return (
    <>
      <OtherBanner heading="Personalized and total service." link="Premium" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
      <div className='second_section'>
        <SecondSectionText textBold="Here's a different option for you." textNormal="Eos in maluisset mediocritatem. Cu qui admodum inimicus, te mei debet qualisque." />
      </div>
    </>
  )
}

export default Premium;
