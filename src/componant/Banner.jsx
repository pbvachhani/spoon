import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <div className='main_banner'>
                <h1 className='main_banner_heading'>Propel your business.</h1>
                <h5 className='main_banner_dis'>Propel comes with everything you need to get your business rolling.</h5>
                <Link exact to={"./contact"} className='btn main_banner_button' >Get Started</Link>
            </div>
        </>
    )
}

export default Banner
