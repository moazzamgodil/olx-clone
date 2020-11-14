import React from 'react';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        let data = this.props.imgsrc !== "" ?
            <div id="" className="uploadBox my-2">
                <img src={this.props.imgsrc} alt="image" />
            </div>
            :
            <div id="" className="uploadBox my-2">
                <span><i className="fa-2x fas fa-camera-retro" /></span>
                <span>Add Photo</span>
            </div>


        return (
            <div className="col-lg-3 col-md-4 col-sm-6 ">
                {data}
            </div>
        )
    }
}

export default ImageUpload;