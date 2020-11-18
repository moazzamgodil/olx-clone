import React from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';
import BannerHome from './banner';

class Home extends React.Component {
    render() {
        return (
            <div>
                <header >
                    <Header />
                    <BannerHome />
                </header>

                <Body />

                <Footer />
            </div>
        );
    }
}

export default Home;