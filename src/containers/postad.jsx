import React from 'react';
import logo from '../assets/images/logo.png';

class PostAd extends React.Component {
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
                    <h5 className="my-4 ml-4 font-weight-bold">SELECTED CATEGORY</h5>
                    <div className="row ml-4 ">
                        <p className="small text-secondary">Mobiles</p>
                        <a className="ml-4 small font-weight-bold text-dark" href="#">Change Category</a>
                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">INCLUDE SOME DETAILS</h4>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Condition *</p>
                            <div>
                                <button type="button" className="btn-lg btn btn-outline-dark">New</button>
                                <button type="button" className="btn-lg btn btn-outline-dark">Used</button>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Type *</p>
                            <div>
                                <button type="button" className="mb-2 btn-lg btn btn-outline-dark">Apple</button>
                                <button type="button" className="mb-2 btn-lg btn btn-outline-dark">Huawei</button>
                                <button type="button" className="mb-2 btn-lg btn btn-outline-dark">Oppo</button>
                                <button type="button" className="mb-2 btn-lg btn btn-outline-dark">Samsung</button>
                                <button type="button" className="mb-2 btn-lg btn btn-outline-dark">Other Mobiles</button>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Ad title *</p>
                            <div className="adInput">
                                <input className="form-control" type="text" name="adTitle" id="adTitle" />
                                <p className="text-secondary">Mention the key features of your item (e.g. brand, model, age, type)</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">Description *</p>
                            <div className="adInput">
                                <textarea className="form-control" name="adDescription" id="adDescription" defaultValue={""} />
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
                                <input className="form-control" type="text" name="adPrice" id="adPrice" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">UPLOAD UP TO 12 PHOTOS</h4>
                        <div className="mb-5">
                            {/* <input class="adPhotoBox" type="file" id="files" name="files[]" multiple> */}
                            {/* <input type="file" id="image" name="image[]" class="photoUpload" multiple /><br /> */}
                            <div>
                                <label id="uploadBoxList" className="row">
                                    <input id="image" name="image[]" type="file" style={{ display: 'None' }} multiple />
                                    <div className="col-3 m-0">
                                        <div id="uploadID1" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID2" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID3" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID4" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID5" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID6" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID7" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID8" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID9" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID10" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID11" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                    <div className="col-3 m-0">
                                        <div id="uploadID12" className="uploadBox mb-4">
                                            <span><i className="fa-2x fas fa-camera-retro" /></span>
                                            <span>Add Photo</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 col-7">
                        <h4 className="my-4 font-weight-bold">CONFIRM YOUR LOCATION</h4>
                        <div className="mb-3">
                            <p className="my-0 mb-1 text-secondary">State *</p>
                            <div className="adInput">
                                <select className="form-control" name="location-input-ad" id="location-input-ad">
                                    <option value="Sindh">Sindh</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="my-0 mb-1 text-secondary">City *</p>
                            <div className="adInput">
                                <select className="form-control" name="location-input-ad" id="location-input-ad">
                                    <option value="Sindh">Sindh</option>
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
                                <input className="form-control" type="text" name="AdMobileNo" id="AdMobileNo" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="ml-4 my-4 col-7">
                        <button type="button" className="btn-lg btn btn-info p-3 font-weight-bold">Post Now</button>
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

export default PostAd;