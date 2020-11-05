import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-light">
                <div className="row p-4 px-5 m-0">
                    <div className="col-3">
                        <h5>Popular Categories</h5>
                        <ul>
                            <li>
                                <a className="text-secondary" href="#">Cars</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Mobile Phones</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Tablets</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Houses</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5>Trending Searches</h5>
                        <ul>
                            <li>
                                <a className="text-secondary" href="#">Cars</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Mobile Phones</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Tablets</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Houses</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5>About us</h5>
                        <ul>
                            <li>
                                <a className="text-secondary" href="#">About us</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Contact us</a>
                            </li>
                            <li>
                                <a className="text-secondary" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5>Follow us</h5>
                        <div className="fa-icons-block">
                            <a className="m-1" href="#" data-toggle="tooltip" data-placement="top" title="Follow us on Facebook"><i className="fab fa-facebook-square" /></a>
                            <a className="m-1" href="#" data-toggle="tooltip" data-placement="top" title="Follow us on Twitter"><i className="fab fa-twitter-square" /></a>
                            <a className="m-1" href="#" data-toggle="tooltip" data-placement="top" title="Subscribe us on Youtube"><i className="fab fa-youtube-square" /></a>
                            <a className="m-1" href="#" data-toggle="tooltip" data-placement="top" title="Subscribe us on Dailymotion"><i className="fab fa-dailymotion" /></a>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center bg-info px-5 py-4 text-light">
                    <div>
                        <p className="h6 m-0">Free Classfieds in Pakistan</p>
                    </div>
                    <div className="ml-auto">
                        <p className="h6 m-0">© 2020, BuySell Now</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;