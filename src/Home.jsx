import React from 'react';
import Banner from './componant/Banner';
import SecondSectionText from './componant/SecondSectionText';
import SingleCard from './componant/SingleCard';
import cardData from "./CardData";

const Home = () => {
  return (
    <>
      <Banner />
      <div className='second_section'>
        <div className='container'>
          <div className='second_section_text_box'>
            <SecondSectionText textBold="Promoting your business and services with Propel:" textNormal="A responsive, multi-page business template with everything you need propel your business." />
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
        <SecondSectionText textBold="That is the beauty of pleasure." textNormal="From here we find no atoms either. As you force no flattery to be neglected, I will leave the eternal pleasures that are euphoric. Just take the pressure to, to iron time two." style={{width:"75%",display:"block",margin:"auto"}} className="w-75 d-block mx-auto" />
      </div>
    </>
  )
}

export default Home;
