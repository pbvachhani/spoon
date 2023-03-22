import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';
import SingleCard from './componant/SingleCard';
import cardData from "./CardData";
import SectionLine from './componant/SectionLine';
import ImageWithDis from './componant/ImageWithDis';
import { Link } from 'react-router-dom';
import FooterGetStartedSection from './componant/FooterGetStartedSection';


const Feature = () => {
    return (
        <>
            <OtherBanner heading="Expect only the best meals from us." link="Features" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
            <div className='second_section'>
                <div className='container'>
                    <div className='second_section_text_box'>
                        <SecondSectionText textBold="Electra set it up. He that option you, that power treated." textNormal="They think that it is too much for me, and he does not accept it, but he who accommodates his accusers." width={"50%"} margin={"0 0 90px 0"} />
                    </div>
                    <div className='card_section'>
                        {cardData.map((value) => {
                            return <SingleCard values={value} width={"23%"} />
                        })}
                    </div>
                </div>
            </div>
            <SectionLine />
            <div className='page_img_dis_section'>
                <div className='container'>
                    <ImageWithDis columnDirection="row align-items-center" columnDirection_1="row align-items-center flex-column-reverse flex-md-row"/>
                </div>
            </div>
            <div className='feature_premium_section'>
                <div className='container'>
                    <div className='feature_premium_section_inner'>
                        <div className='feature_premium_section_inner_green_box'>
                            <div className='other_banner_link_box'>
                                <Link exact to={"/feature#"} className="other_banner_link">Go Premium</Link>
                                <div className='other_banner_link_line'></div>
                            </div>
                            <h2 className='feature_premium_section_inner_green_box_heading'><span className='feature_premium_section_inner_green_box_heading_bold'>Tation times to him use, force or eirmod accus cu.</span> And let them be received by thee, through the written stories of the petitioners.</h2>
                            <Link exact to={"/premium"} className="feature_premium_section_inner_green_box_button">Go Premium</Link>
                        </div>
                    </div>
                </div>
            </div>
            <FooterGetStartedSection />
        </>
    )
}

export default Feature;
