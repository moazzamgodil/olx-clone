import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class LoaderComp extends React.Component {
    render() {
        return (
            <div className="parentDisable">
                <div className='overlay-box'>
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div>
            </div>
        );
    }
}

export default LoaderComp;