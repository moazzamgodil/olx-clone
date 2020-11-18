import React from 'react';
import banner from '../../assets/images/banner.png';

class BannerHome extends React.Component {
    render() {
        return (
            <div className="container-fluid p-0 bannerIMG">
                <img className="w-100 " src={banner} alt="banner" />
            </div>
        );
    }
}

export default BannerHome;

