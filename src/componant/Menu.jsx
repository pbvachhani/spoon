import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent spoon_header_main">
                <div className="container">
                    <Link exact to={"/"} className="navbar-brand"  > <img src="./images/logo-spoon-white.svg" alt="spoon_logo" /> </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0 spoon_header_ul">
                            <li className="nav-item bg-[#fff]">
                                <Link exact to={"/features"} className="nav-link p-4 text-white" > Features </Link>
                            </li>
                            <li className="nav-item">
                                <Link exact to={"/premium"} className="nav-link p-4 text-white" > Premium </Link>
                            </li>
                            <li className="nav-item">
                                <Link exact to={"/pricing"} className="nav-link p-4 text-white" > Pricing </Link>
                            </li>
                            <li className="nav-item">
                                <Link exact to={"/about"} className="nav-link p-4 text-white" > About </Link>
                            </li>
                            <li className="nav-item m-auto d-none d-lg-block">
                                <div class="bullet bg-light m-4 p-1 rounded-circle align-item-center"></div>
                            </li>
                            <li className="nav-item">
                                <Link exact to={"/sign in"} className="nav-link p-4 text-white" > Sign in </Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline-light my-2 my-sm-0 border-2 p-0 spoon_header_button"><Link exact to={"/contact"} className="nav-link text-white header_button_link" >Get Started</Link></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;
