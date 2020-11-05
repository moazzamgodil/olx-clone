import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import banner from '../../assets/images/banner.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <form className="form-inline my-2 my-lg-0 mx-2">
                                <div className="input-group inputBorderlocation">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-search" /></span>
                                    </div>
                                    <input className="form-control locationbox" name="locationbox" placeholder="Pakistan" type="text" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" />
                                    <div className="input-group-append" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <a href="#" className="input-group-text locationAngleDown"><i className="fas fa-angle-down" /></a>
                                    </div>
                                    <div className="dropdown-menu locationDropdownStyle" aria-labelledby="locationDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </form>
                            <form className="form-inline my-2 my-lg-0 mx-2">
                                <div className="input-group inputBordersearch">
                                    <input type="text" className="form-control searchbox" placeholder="Search for Mobile Phones, Cars, and more..." aria-label="Search for Mobile Phones, Cars, and more..." aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-dark searchButton" type="button" id="button-addon2"><i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </form>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark h4 m-1" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
                            </li>
                            <li className="nav-item mx-2 form-inline">
                                <Link to="/postAd"><button type="button" className="btn btn-outline-info buttonSell"><span className="h5 m-0"><i className="fas fa-plus" /> Sell</span></button></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid px-5 py-2 categoryNav d-flex align-items-center flex-wrap">
                    <a className="text-dark mr-4" href="#">Mobile Phones</a>
                    <a className="text-dark mr-4" href="#">Cars</a>
                    <a className="text-dark mr-4" href="#">Motorcycles</a>
                    <a className="text-dark mr-4" href="#">Houses</a>
                    <a className="text-dark mr-4" href="#">Tablet</a>
                    <a className="text-dark mr-4" href="#">Computer &amp; Accessories</a>
                    <a className="text-dark mr-4" href="#">TV - Video - Audio</a>
                </div>
                <div className="container-fluid p-0 bannerIMG">
                    <img className="w-100 " src={banner} />
                </div>
            </header>
        )
    }
}

export default Header;
