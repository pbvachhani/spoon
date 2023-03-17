import React from 'react';
import { Link } from 'react-router-dom';

const FooterGetStartedSection = () => {
    return (
        <>
            <div className='fifth_section'>
                <div className='container'>

                    <div className='fifth_section_link_box'>
                        <Link exact to={"/about"} className="fifth_section_link">Party On</Link>
                        <div className='fifth_section_link_line'></div>
                    </div>
                    <div className='fifth_section_iteams'>
                        <div className='fifth_section_info_main'>
                            <div className='fifth_section_text_box'>
                                <h2 className='fifth_section_text'><span>What does it take for me?</span> When I say that the labors and duties of the chiefs are embraced by the sea</h2>
                            </div>
                        </div>
                        <div >
                            <Link exact to={"/contact"} className='fifth_section_button' >Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterGetStartedSection;
