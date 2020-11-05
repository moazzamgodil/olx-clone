import React from 'react';
import logo from '../assets/images/logo.png';

class ChooseCategory extends React.Component {
    render() {
        return (

            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <i className="fas fa-arrow-left post-ad-back" />
                    <a className="navbar-brand" href="#"><img className="logo2" src={logo} /></a>
                </nav>
                <div className="text-center mt-4">
                    <h3 className="font-weight-bold">POST YOUR AD</h3>
                </div>
                <div className="choose-category border rounded mb-4">
                    <h5 className="my-4 ml-4 font-weight-bold">CHOOSE A CATEGORY</h5>
                    <div className="col-6">
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-mobile-alt" />
                            </div>
                            <p>Mobiles</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-car" />
                            </div>
                            <p>Cars</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-motorcycle" />
                            </div>
                            <p>Motorcycles</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-home" />
                            </div>
                            <p>Houses</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-tablet-alt" />
                            </div>
                            <p>Tablet</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-laptop" />
                            </div>
                            <p>Computer &amp; Accessories</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                        <div className="category-box row font-weight-normal">
                            <div className="col-2 text-center ml-0 pl-0">
                                <i className="fas fa-tv" />
                            </div>
                            <p>TV - Video - Audio</p>
                            <i className="ml-auto fas fa-angle-right" />
                        </div>
                    </div>
                </div>
                <footer className="bg-light">
                    <div className="d-flex align-items-center bg-info px-5 py-4 text-light">
                        <div>
                            <p className="h6 m-0">Free Classfieds in Pakistan</p>
                        </div>
                        <div className="ml-auto">
                            <p className="h6 m-0">© 2020, BuySell Now</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default ChooseCategory;