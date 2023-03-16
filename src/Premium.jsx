import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';

const Premium = () => {
  return (
    <>
      <OtherBanner heading="Personalized and total service." link="Premium" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
      <div className='second_section'>
        <SecondSectionText textBold="Here's a different option for you." textNormal="He would have preferred them to mediocrity. With him who is a very great enemy, he owes you to me." />
      </div>
    </>
  )
}

export default Premium;
