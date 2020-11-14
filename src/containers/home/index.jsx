import React from 'react';
import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Body />

                <Footer />
            </div>
        );
    }
}

export default Home;