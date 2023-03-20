import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';

const Contact = () => {
  return (
    <>
      <OtherBanner heading="Have a question for us? Go for it." link="Contact" dis="But let them remove the two fears, from the whole enemy they disagree with the practice. I say that as a perfect practice. Football is not a perfect option for the blamers. Those who do their homework for their country, what they do to him and what they do right." />
      <div className='second_section'>
        <SecondSectionText textBold="Send us your inquiries." textNormal="He preferred them to the average. With whom you are my very enemy." width={"50%"} margin={"0 0 90px 0"} />
        <div className='row'>
          <div className='col-md-6'>
            <div className='contact_email_box'>
              <h5 className='contact_email_text'>Email:</h5>
              <h5 className='contact_email_name_text'>contact@spooncatering.com</h5>
            </div>
            <div className='contact_email_box'>
              <h5 className='contact_email_text'>Address:</h5>
              <h5 className='contact_email_name_text'>
                1263 Mission Street, Floor 3<br></br>
                San Francisco CA 94103<br></br>
                United States</h5>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='contact_form_box'>
              <form className='contact_form_main'>
                <div className='input_field'>
                  <input type={"text"} placeholder="Name" />
                </div>
                <div className='input_field'>
                  <input type={"text"} placeholder="Email" />
                </div>
                <div className='input_field'>
                  <input type={"text"} placeholder="Tell us all about it" />
                </div>
                <div className='input_field input_field_button'>
                  <input type={"submit"} placeholder="Submit" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
