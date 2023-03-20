import React from 'react';
import FooterGetStartedSection from './componant/FooterGetStartedSection';
import ImageWithDis from './componant/ImageWithDis';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';
import SectionLine from './componant/SectionLine';

const Premium = () => {
  return (
    <>
      <OtherBanner heading="Personalized and total service." link="Premium" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
      <div className='second_section'>
        <div className='container'>
          <SecondSectionText textBold="Here's a different option for you." textNormal="He would have preferred them to mediocrity. With him who is a very great enemy, he owes you to me." width={"50%"} margin={"0 0 90px 0"} />
        </div>
        <div className='primium_banner_2_box'>
          <img src='./images/premium-page-banner-2.jpeg' alt='primium page banner' width={"100%"} />
        </div>
        <div className='primium_page_card_main'>
          <div className="primium_page_card_box">
            <div className='primium_page_card_box_img'>
              <img src="./images/burger_icon-feature-02.svg" className="card-img-left" alt="..." width={"64px"} />
            </div>
            <div className='primium_page_card_box_content'>
              <h5 className='primium_page_card_box_content_heading'>For the established el</h5>
              <p className='primium_page_card_box_content_dis'>Tritani consectetuer could be able to do this, by no means the least, to make them happen in a splendid way. Let them say that the democritus makes them wealthy, that they envy him mediocrity.</p>
            </div>
          </div>
        </div>
        <div className='primium_page_testimonial_main'>
          <h5 className='primium_page_testimonial_heading'>WHAT THE PEOPLE SAY</h5>
          <h3 className='primium_page_testimonial_review'>“Great customer service, kuddos for doing things the right way rather than the easy way. I am still getting compliments about the food served at my wedding.”</h3>
          <div className='primium_page_testimonial_user'>
            <img src='./images/premium_testimonal_user_.jpg' alt='' className='primium_page_testimonial_user_img' />
            <h5 className='primium_page_testimonial_user_name'>Paul Morgan</h5>
          </div>
        </div>
      </div>
      <SectionLine />
      <div className='primium_page_third_section'>
        <div className='container'>
          <ImageWithDis columnDirection="row flex-row-reverse" />
        </div>
      </div>
      <FooterGetStartedSection />
    </>
  )
}

export default Premium;
