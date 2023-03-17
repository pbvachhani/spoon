import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='footer_section_img_col'>
                                <div className='footer_section_img_box'>
                                    <img src='./images/logo-spoon-white.svg' alt='' />
                                </div>
                                <h5 className='footer_section_img_col_text'>© 2018 Spoon Inc, All rights reserved.</h5>
                            </div>
                        </div>
                        <div className='col-md-1'>
                            <ul className='footer_section_link_2col'>
                                <li className='mb-3' ><Link exact to={"./features"} className='footer_section_link_2col_list'  >Features</Link></li>
                                <li className='mb-3'><Link exact to={"./premium"} className='footer_section_link_2col_list' >Premium</Link></li>
                                <li className='mb-3'><Link exact to={"./pricing"} className='footer_section_link_2col_list' >Pricing</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-1'>
                        <ul className='footer_section_link_2col'>
                                <li className='mb-3' ><Link exact to={"./about"} className='footer_section_link_2col_list'  >About</Link></li>
                                <li className='mb-3'><Link exact to={"./#"} className='footer_section_link_2col_list' >Blog</Link></li>
                                <li className='mb-3'><Link exact to={"./contact"} className='footer_section_link_2col_list' >Contact</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                        <ul className='footer_section_link_2col'>
                                <li className='mb-3' ><Link exact to={"./#"} className='footer_section_link_2col_list'  >Image License Info</Link></li>
                                <li className='mb-3'><Link exact to={"./#"} className='footer_section_link_2col_list' >Powered by Webflow</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <div className='footer_section_icon_link'>
                            <Link exact to={"./#"} className='footer_section_icon_link'><img src='./images/footer_icon-facebook.svg' alt='fb-icon'></img></Link>
                            <Link exact to={"./#"} className='footer_section_icon_link'><img src='./images/footer_icon-instagram.svg' alt='fb-icon'></img></Link>
                            <Link exact to={"./#"} className='footer_section_icon_link'><img src='./images/footer_icon-twitter.svg' alt='fb-icon'></img></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
