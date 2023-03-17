import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
                <div className="container">
                    <Link exact to={"/"} className="navbar-brand"  > <img src="./images/logo-spoon-white.svg" alt="spoon_logo" /> </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
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
                            <li className="nav-item m-auto">
                                <div class="bullet bg-light m-4 p-1 rounded-circle align-item-center"></div>
                            </li>
                            <li className="nav-item">
                                <Link exact to={"/sign in"} className="nav-link p-4 text-white" > Sign in </Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline-light my-2 my-sm-0 border-2 " >Get Started</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu;
