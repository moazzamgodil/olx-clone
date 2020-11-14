import React from 'react';
import { connect } from 'react-redux';
import { postAd, isPostedtoNull } from '../store/action';
import logo from '../assets/images/logo.png';
import history from '../config/history';
import { Link } from 'react-router-dom';
import citiesstate from './components/cities';
import comps from './components/typebtn';
import ImageUpload from "./imageupload";


class PostAd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedin_user: this.props.loggedin_user,
            select_cat: this.props.select_cat,
            adTitle: "",
            adDescription: "",
            selectType: "",
            selectCondition: "",
            adPrice: "",
            locationState: "",
            locationCity: "",
            adMobileNo: "",
            itemImages: {},
            isLoading: false,
        }
    }


    goBack = () => {
        history.goBack();
    }


    handleAdSubmit = (e) => {
        e.preventDefault();

        this.props.postAd(this.state)

        this.setState({
            isLoading: true
        });


        // this.props.uploadImage(this.state.itemImages)

    }



    changeCat = () => {
        history.replace("/postAd");
    }


    selectCondition = (e) => {

        let target = e.target
        let targetchild = e.target.parentNode.childNodes
        let targetName = e.target.innerHTML;

        target.classList.add("btn-dark");
        target.classList.remove("btn-outline-dark");

        for (var i = 0; i < targetchild.length; i++) {

            if (targetchild[i].innerHTML !== targetName) {

                targetchild[i].classList.add("btn-outline-dark");
                targetchild[i].classList.remove("btn-dark");

            }

        }

        this.setState({
            selectCondition: targetName
        });

    }


    selectType = (e) => {

        let target = e.target
        let targetchild = e.target.parentNode.childNodes
        let targetName = e.target.innerHTML;

        target.classList.add("btn-dark");
        target.classList.remove("btn-outline-dark");

        for (var i = 0; i < targetchild.length; i++) {

            if (targetchild[i].innerHTML !== targetName) {

                targetchild[i].classList.add("btn-outline-dark");
                targetchild[i].classList.remove("btn-dark");

            }

        }

        this.setState({
            selectType: targetName
        });

    }


    handleInputChange = (e) => {

        const value = e.target.value;
        const inputName = e.target.name;

        this.setState({
            [inputName]: value
        });

    }


    handleImageChange = (e) => {

        const files = e.target.files;

        if (files.length <= 12) {
            var images = [];

            for (var i = 0; i < files.length; i++) {
                var dataObject = {}; /* Init the variable here */
                dataObject['image'] = files[i];
                dataObject['previewIMG'] = URL.createObjectURL(files[i]);

                images[i] = dataObject;
            }

            this.setState({
                itemImages: images
            });

        } else {
            alert("Max 12 Photos are allowed")
        }

    }


    componentDidUpdate() {

        if (this.props.isPosted) {
            alert("Successfully");

            this.props.isPostedtoNull(false)

            this.setState({
                isLoading: false
            });

            history.replace("/")
        }

    }


    componentDidMount() {
        window.addEventListener('beforeunload', this.beforeunload.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.beforeunload.bind(this));
    }

    beforeunload(e) {
        if (!this.props.isPosted) {
            e.preventDefault();
            e.returnValue = true;
        }
    }


    render() {

        let isLoader = this.state.isLoading === true ?
            <div className="parentDisable">
                <div className='overlay-box'>
                    <progress value={this.props.progress} max="100" />
                </div>
            </div>
            :
            null


        let imgs = Object.keys(this.state.itemImages).length !== 0 ?

            Object.entries(this.state.itemImages).map(function (v, i) {
                return ([

                    <ImageUpload imgsrc={v[1].previewIMG} key={i} />

                ]);
            })
            :
            <div className="d-flex flex-wrap">
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
                <ImageUpload imgsrc="" />
            </div>


        let selectphoto = Object.keys(this.state.itemImages).length !== 0 ?

            <div className="text-center mx-auto w-100">
                <h5>Select Photos Again</h5>
            </div>
            :
            null


        let cities = citiesstate(this.state.locationState);
        let compVar = [];

        if (this.props.select_cat === "") {
            history.replace("/postAd");
        } else {
            compVar = comps(this.props.select_cat);
        }

        return (
            <div>
                {isLoader}
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <span onClick={this.goBack}><i className="fas fa-arrow-left post-ad-back" /></span>
                    <a className="navbar-brand" href="/#"><img className="logo2" src={logo} alt="logo" /></a>
                </nav>
                <div className="text-center mt-4">
                    <h3 className="font-weight-bold">POST YOUR AD</h3>
                </div>
                <form onSubmit={this.handleAdSubmit} className="choose-category border rounded mb-4">
                    <h5 className="my-4 ml-4 font-weight-bold">SELECTED CATEGORY</h5>
                    <div className="row ml-4 ">
                        <p className="small text-secondary">{this.props.select_cat}</p>
                        <Link to="/postAd" className="ml-4 small font-weight-bold text-dark" replace>Change Category</Link>
                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">INCLUDE SOME DETAILS</h4>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Condition *</p>
                            <div>
                                <button type="button" onClick={this.selectCondition} className="btn-lg btn btn-outline-dark mr-2">New</button>
                                <button type="button" onClick={this.selectCondition} className="btn-lg btn btn-outline-dark mr-2">Used</button>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Type *</p>
                            <div className="adInput">
                                <select onChange={this.handleInputChange} value={this.state.selectType} className="form-control" name="selectType" id="selectType" >
                                    <option value="" defaultValue>Select</option>
                                    {compVar.map((value, index) => {
                                        return <option key={index} value={value}>{value}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Ad title *</p>
                            <div className="adInput">
                                <input className="form-control" type="text" name="adTitle" id="adTitle" onChange={this.handleInputChange} value={this.state.adTitle} />
                                <p className="text-secondary">Mention the key features of your item (e.g. brand, model, age, type)</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Description *</p>
                            <div className="adInput">
                                <textarea className="form-control" name="adDescription" id="adDescription" onChange={this.handleInputChange} value={this.state.adDescription} />
                                <p className="text-secondary">Include condition, features and reason for selling</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">SET A PRICE</h4>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Price *</p>
                            <div className="adInput input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text text-secondary">Rs</span>
                                </div>
                                <input className="form-control" type="number" name="adPrice" id="adPrice" onChange={this.handleInputChange} value={this.state.adPrice} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 col-8">
                        <h4 className="my-4 font-weight-bold">UPLOAD UP TO 12 PHOTOS</h4>
                        <div className="mb-5">

                            <label id="uploadBoxList">
                                <input id="image" name="itemImages" type="file" style={{ display: 'None' }} multiple onChange={this.handleImageChange} />
                                <div className="d-flex flex-wrap">
                                    {imgs}
                                </div>
                            </label>

                            {selectphoto}

                        </div>

                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">CONFIRM YOUR LOCATION</h4>
                        <div className="mb-3">
                            <p className="my-0 mb-1 text-secondary">State *</p>
                            <div className="adInput">
                                <select onChange={this.handleInputChange} value={this.state.locationState} className="form-control" name="locationState" id="locationState" >
                                    <option value="" defaultValue>Select State</option>
                                    <option value="Sindh">Sindh</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Balochistan">Balochistan</option>
                                    <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">City *</p>
                            <div className="adInput">
                                <select onChange={this.handleInputChange} value={this.state.locationCity} className="form-control" name="locationCity" id="locationCity" >
                                    <option value="" defaultValue>Select The City</option>
                                    {cities.map((value, index) => {
                                        return <option key={index} value={value}>{value}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">REVIEW YOUR DETAILS</h4>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Mobile Phone Number *</p>
                            <div className="adInput">
                                <input className="form-control" type="number" name="adMobileNo" id="adMobileNo" onChange={this.handleInputChange} value={this.state.adMobileNo} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 my-4 col-7">
                        <button type="submit" className="btn-lg btn btn-info p-3 font-weight-bold">Post Now</button>
                    </div>
                </form>
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


const mapStateToProps = (state) => ({
    loggedin_user: state.loggedin_user,
    select_cat: state.select_cat,
    isAuthenticated: state.isAuthenticated,
    select_condition: state.select_condition,
    select_type: state.select_type,
    isPosted: state.isPosted,
    progress: state.progress,
})

const mapDispatchToProp = (dispatch) => ({
    postAd: (data) => dispatch(postAd(data)),
    isPostedtoNull: (data) => dispatch(isPostedtoNull(data)),
})

export default connect(mapStateToProps, mapDispatchToProp)(PostAd);