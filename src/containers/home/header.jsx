import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../store/action';
import LoginModal from "../loginModal.jsx";
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/user/avatar.jpg';

class Header extends React.Component {
    render() {


        // if() {
        // window.$('#loginModal').modal('show');
        // }


        let authButton = this.props.isAuthenticated === true ?
            <li className="nav-item mx-2 dropdown">
                <div>
                    <a href="/#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src={avatar} className="avatar" alt="Avatar" /> </a>
                    <div className="dropdown-menu">
                        <a href="/#" className="dropdown-item"><i className="fa fa-user" /> Profile</a>
                        <div className="dropdown-divider" />
                        <a href="/#" onClick={() => this.props.signout()} className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a>
                    </div>
                </div>

            </li>
            :
            <li className="nav-item mx-2">
                <a className="nav-link text-dark h4 m-1" href="/#" data-toggle="modal" data-target="#loginModal">Login</a>
            </li>


        let authPostAd = this.props.isAuthenticated === true ?
            <li className="nav-item mx-2 form-inline">
                <Link to="/postAd"><button type="button" className="btn btn-outline-info buttonSell"><span className="h5 m-0"><i className="fas fa-plus" /> Sell</span></button></Link>
            </li>
            :
            <li className="nav-item mx-2 form-inline">
                <button type="button" className="btn btn-outline-info buttonSell" data-toggle="modal" data-target="#loginModal"><span className="h5 m-0"><i className="fas fa-plus" /> Sell</span></button>
            </li>


        return (
            <div >
                <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt="logo" /></a>
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
                                        <a href="/#" className="input-group-text locationAngleDown"><i className="fas fa-angle-down" /></a>
                                    </div>
                                    <div className="dropdown-menu locationDropdownStyle" aria-labelledby="locationDropdown">
                                        <a className="dropdown-item" href="/#">Action</a>
                                        <a className="dropdown-item" href="/#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="/#">Something else here</a>
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

                            {authButton}
                            {authPostAd}
                        </ul>
                    </div>
                </nav>
                <div style={{ marginTop: "60px" }} className="container-fluid px-5 py-2 categoryNav d-flex align-items-center flex-wrap">
                    <a className="text-dark mr-4" href="/#">Mobile Phones</a>
                    <a className="text-dark mr-4" href="/#">Cars</a>
                    <a className="text-dark mr-4" href="/#">Motorcycles</a>
                    <a className="text-dark mr-4" href="/#">Houses</a>
                    <a className="text-dark mr-4" href="/#">Tablet</a>
                    <a className="text-dark mr-4" href="/#">Computer &amp; Accessories</a>
                    <a className="text-dark mr-4" href="/#">TV - Video - Audio</a>
                </div>
                <LoginModal />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated
})

const mapDispatchToProp = (dispatch) => ({
    signout: () => dispatch(signout())
})

export default connect(mapStateToProps, mapDispatchToProp)(Header);

