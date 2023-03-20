import React from 'react';

const AboutProfileCard = (props) => {
    return (
        <>
            <div className="card about_profile_card_main">
                <img src={props.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title about_profile_card_name">{props.data.name}</h5>
                        <p className="card-text about_profile_card_designation">{props.data.designation}</p>
                    </div>
            </div>
        </>
    )
}

export default AboutProfileCard;
