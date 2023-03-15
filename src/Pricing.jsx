import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';

const Pricing = () => {
  return (
    <>
       <OtherBanner heading="A payment plan for every occasion." link="Pricing" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
       <div className='second_section'>
        <SecondSectionText textBold="We offer multiple options." textNormal="Kid’s birthday party? Yup, we can cover that. A wedding? No problem, we got you. You get the idea." />
      </div>
    </>
  )
}

export default Pricing;
