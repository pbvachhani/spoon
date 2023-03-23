import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OtherBanner = (props) => {
  const location = useLocation();
  return (
    <>
      <div className='other_banner' style={{paddingBottom:`${props.paddingBottom}`}}>
        <div className='container'>
          <div className='other_banner_link_box'>
            <Link exact to={location.pathname} className="other_banner_link">{props.link}</Link>
            <div className='other_banner_link_line'></div>
          </div>
          <h1 className="other_banner_heading">{props.heading}</h1>
          <p class="other_banner_dis">{props.dis}</p>
        </div>
      </div>
    </>
  )
}

export default OtherBanner;
