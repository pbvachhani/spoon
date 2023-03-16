import React from 'react';
import OtherBanner from './componant/OtherBanner';
import SecondSectionText from './componant/SecondSectionText';
import SingleCard from './componant/SingleCard';
import cardData from "./CardData";


const Feature = () => {
    return (
        <>
            <OtherBanner heading="Expect only the best meals from us." link="Features" dis="At sint tollit veritus duo, ex tota inimicus dissentiunt usu. Dico tamquam perfecto usu id. Eu nec option perfecto vituperatoribus. Ea qui congue patrioque, quo ei recteque consequuntur." />
            <div className='second_section'>
                <div className='container'>
                    <div className='second_section_text_box'>
                        <SecondSectionText textBold="Electra set it up. He that option you, that power treated." textNormal="They think that it is too much for me, and he does not accept it, but he who accommodates his accusers." />
                    </div>
                    <div className='card_section'>
                        {cardData.map((value) => {

                            return <SingleCard values={value} width={"23%"} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature;
