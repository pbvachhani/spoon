import React from 'react';
import PriceCardSmallText from './priceCardSmallText';
import { Link } from 'react-router-dom';

const PriceCard = (props) => {
    return (
        <>
            <div className='price_card_main'>
                <div className='price_card_content'>
                    <h5 className='price_card_heading'>{props.heading}</h5>
                    <h2 className='price_card_price'>{props.price}<sub>USD</sub></h2>
                    <p className='price_card_dis' >{props.dis}</p>
                    <ul className='price_card_ul'>
                        {props.list.map((value) => {
                            return <PriceCardSmallText smallText={value} />
                        })}
                    </ul>
                </div>
                <Link exact to={"/pricing#"} className="price_card_button" >Get Started</Link>
            </div>
        </>
    )
}

export default PriceCard;
