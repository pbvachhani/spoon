import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';
import SectionLine from './componant/SectionLine';
import AboutGuideText from './componant/AboutGuideText';
import FooterGetStartedSection from './componant/FooterGetStartedSection';
import aboutProfileData from './AboutProfileData';
import AboutProfileCard from './componant/AboutProfileCard';

const About = () => {
  return (
    <>
      <OtherBanner heading="Changing the catering game." link="About" dis="But let them remove the two fears, from the whole enemy they disagree with the practice. I say that as a perfect practice. Football is not a perfect option for the blamers. Those who do their homework for their country, what they do to him and what they do right." paddingBottom="210px" />
      <div className='about_banner_2_box'>
        <img src='./images/premium-page-banner-2.jpeg' alt='primium page banner' width={"100%"} />
      </div>
      <div className='about_third_section'>
        <div className='container'>
          <SecondSectionText textBold="We combine the benefits of the best local farms with advances made possible by technology to deliver you the best catering experience possible." textNormal=" Food surrounds us, but we don’t always think about where it comes from or how it got to us. The way we eat and our experiences with food have huge impact on everything from the environment to our health." width="65%" align="center" margin="auto" />
        </div>
      </div>
      <SectionLine />
      <div className='about_forth_section'>
        <div className='container'>
          <SecondSectionText textBold="He was hardly reproached with the name of the bad. " textNormal="Everyone needs you, everyone criticizes you. When he greeted the argument of Democritus an." width="50%" margin="0 0 90px 0" />
          <div className='about_guide_text_box'>
            <AboutGuideText num="01" heading="Stay curious" dis="I agree that it should be heard first, that the right is proved to each individual. Two of the army's disgust, of which he felt one." />

            <AboutGuideText num="02" heading="Be respectful" dis="I agree that it should be heard first, that the right is proved to each individual. Two of the army's disgust, of which he felt one." />

            <AboutGuideText num="03" heading="Do good work" dis="I agree that it should be heard first, that the right is proved to each individual. Two of the army's disgust, of which he felt one." />
          </div>
        </div>
      </div>
      <SectionLine />
      <div className='about_fifth_section'>
        <div className='container'>
          <SecondSectionText textBold="Meet the awesome team behind Spoon. " textNormal="We’re bridging the gap between the world’s oldest and largest industry and a future where technology can be used to solve our hardest problems." width="50%" margin="0 0 90px 0" />
          <div className='about_profile_card_box'>
            {
              aboutProfileData.map((value) => {
                return <AboutProfileCard data={value} />
              })
            }
          </div>
        </div>
      </div>
      <FooterGetStartedSection />
    </>
  )
}

export default About;
