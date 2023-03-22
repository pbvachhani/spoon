import React from 'react';
import Banner from './componant/Banner';
import SecondSectionText from './componant/SecondSectionText';
import SectionLine from './componant/SectionLine';
import SingleCard from './componant/SingleCard';
import cardData from "./CardData";
import { Link } from 'react-router-dom';
import ImageWithDis from './componant/ImageWithDis';
import FooterGetStartedSection from './componant/FooterGetStartedSection';

const Home = () => {
  return (
    <>
      <Banner />
      <div className='second_section'>
        <div className='container'>
          <div className='second_section_text_box'>
            <SecondSectionText textBold="Promoting your business and services with Propel:" textNormal="A responsive, multi-page business template with everything you need propel your business." width={"50%"} margin={"0 0 90px 0"} />
          </div>
          <div className='card_section'>
            {cardData.map((value, index) => {
              if (index > 2) {
                return ""
              } else {
                return <SingleCard values={value} width={"29%"} />
              }
            })}
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='home_slider_main'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/home_image-slider-01.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/home_image-slider-02.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/home_image-slider-03.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='third_section'>
        <div className='container'>
          <SecondSectionText textBold="That is the beauty of pleasure." textNormal="From here we find no atoms either. As you force no flattery to be neglected, I will leave the eternal pleasures that are euphoric. Just take the pressure to, to iron time two." width={"65%"} margin={"0 auto 40px"} align={"center"} />
          <Link exact to={"/about"} className="third_section_link_text"> More About Us </Link>
        </div>
      </div>
      <SectionLine />
      <div className='forth_section'>
        <div className='container'>
          <ImageWithDis columnDirection="row align-items-center" columnDirection_1="row align-items-center flex-column-reverse flex-md-row"  />
          <h3 className='forth_section_bottom_heading '>Wanna know more about the Premium deal?</h3>
          <Link exact to={"/about"} className="third_section_link_text text-center"> See the full range of Premium </Link>
        </div>
      </div>
      <SectionLine />
      <FooterGetStartedSection />
    </>
  )
}

export default Home;
