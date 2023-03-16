import React from 'react';
import cardData from "../CardData";

const SingleCard = (props) => {
    return (
        <>
            <div className="card card_box" style={{width:`${props.width}`}}>
                <div className='card_img'>
                    <img src={props.values.img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.values.title}</h5>
                    <p className="card-text">{props.values.dis}</p>
                </div>
            </div>
        </>
    )
}

export default SingleCard;
