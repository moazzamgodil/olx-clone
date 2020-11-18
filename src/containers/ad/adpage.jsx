import React from 'react';
import Header from '../home/header';
import avatar from '../../assets/images/user/avatar.jpg';
import history from '../../config/history';

class AdPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            showNum: false,
        }
    }


    static getDerivedStateFromProps(props, state) {

        return {
            isAuthenticated: props.isAuthenticated,
            loggedin_user: props.loggedin_user,
            getUserData: props.getUserData,
            select_cat: props.data.select_cat,
            adTitle: props.data.adTitle,
            adDescription: props.data.adDescription,
            selectType: props.data.selectType,
            selectCondition: props.data.selectCondition,
            adPrice: props.data.adPrice,
            adPriceConvert: props.data.adPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            locationState: props.data.locationState,
            locationCity: props.data.locationCity,
            adMobileNo: props.data.adMobileNo,
            postedBy: props.data.postedBy,
            dateTime: props.data.date,
            uploadedImages: props.data.uploadedImages,
        }

        // return {}

    }

    showNum = () => {
        if (this.props.isAuthenticated !== true) {
            window.$('#loginModal').modal('show');
        } else if (this.props.isAuthenticated === true && this.state.showNum !== true) {
            this.setState({
                showNum: true
            })
        } else if (this.props.isAuthenticated === true && this.state.showNum !== false) {
            this.setState({
                showNum: false
            })
        }
    }


    componentDidUpdate() {
        document.getElementById("carousel-inner-id").childNodes[0].classList.add("active");
        document.getElementById("carousel-indicators-id").childNodes[0].classList.add("active");
        //    console.log(a)
    }


    render() {

        var today = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var dd = String(today.getDate()).padStart(2, '0');
        var mm = months[today.getMonth()];
        var yyyy = today.getFullYear();

        today = dd + ' ' + mm + ', ' + yyyy;

        let dateCheck = this.state.dateTime === today ?
            "Today"
            :
            this.state.dateTime


        let checkStateofNum = this.state.showNum !== true ?
            ["**********", "Show Number"]
            : [this.state.adMobileNo, "Hide Number"]


        let phone = this.props.isAuthenticated !== true ?
            "**********"
            : checkStateofNum
        // : this.state.adMobileNo

        // console.log(this.state.uploadedImages[0])
        return (

            <div>
                <Header />

                <div className="container-fluid px-5">
                    <div className="row mt-5">

                        <div className="col-8">
                            <div className="card">

                                <div id="adPictures" className="carousel slide z-depth-1-half" data-ride="carousel" data-interval="false">
                                    <ul id="carousel-indicators-id" className="carousel-indicators carousel-indicators--thumbnails">
                                        {
                                            this.state.uploadedImages.map(function (v, i) {
                                                return ([

                                                    <li data-target="#adPictures" data-slide-to={i} key={i}>
                                                        <img className="d-block w-100" src={v} alt={"image " + i} />
                                                    </li>

                                                ]);
                                            })
                                        }
                                        {/* <li data-target="#adPictures" data-slide-to="0" className="active">
                                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide" />
                                        </li>
                                        <li data-target="#adPictures" data-slide-to="1">
                                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide" />

                                        </li>
                                        <li data-target="#adPictures" data-slide-to="2"></li>
                                        <li data-target="#adPictures" data-slide-to="3"></li> */}
                                    </ul>
                                    <div id="carousel-inner-id" className="carousel-inner">
                                        {
                                            this.state.uploadedImages.map(function (v, i) {
                                                return ([

                                                    <div className="carousel-item" key={i}>
                                                        <img className="d-block w-100" src={v} alt={"image " + i} />
                                                    </div>

                                                ]);
                                            })
                                        }
                                        {/* <div className="carousel-item">
                                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide" />
                                        </div> */}
                                    </div>
                                    <a className="carousel-control-prev" href="#adPictures" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#adPictures" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-4">

                            <div className="card p-4">
                                <p className="h1 font-weight-bold text-dark">Rs {this.state.adPriceConvert}</p>
                                <p className="text-muted">{this.state.adTitle}</p>
                                <div className="mt-3 d-flex justify-content-between listcardfoot">
                                    <p className="h6 text-muted font-weight-light">{this.state.locationCity}, {this.state.locationState}</p>
                                    <p className="h6 text-muted font-weight-light">{dateCheck}</p>
                                </div>
                            </div>

                            <div className="m-2"></div>

                            <div className="card p-4">
                                <p className="h4 text-dark">Seller Description</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar} className="avatar-bg mr-3" alt="Avatar" />
                                    <div>
                                        <p className="h5 font-weight-bold text-dark text-uppercase">{this.state.getUserData.name}</p>
                                        <p className="h6 text-muted font-weight-light">Member since {this.state.getUserData.creationTime}</p>
                                    </div>
                                </div>
                                <div className="text-center d-flex justify-content-center align-items-center">
                                    <i className="fas fa-phone-alt mr-3"></i>
                                    <p className="m-0">{phone[0]}</p>
                                    <a className="ml-3 small" onClick={this.showNum} href={history.location.pathname + "#"}>{phone[1]}</a>
                                </div>
                                {/* <p className="text-muted">{this.state.adTitle}</p>
                                <div className="mt-3 d-flex justify-content-between listcardfoot">
                                    <p className="h6 text-muted font-weight-light">{this.state.locationCity}, {this.state.locationState}</p>
                                    <p className="h6 text-muted font-weight-light">{dateCheck}</p>
                                </div> */}
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default AdPage;