import { render } from '@testing-library/react';
import React from 'react';
// import image from '../assets/images/upload/phone.jpg';
import LoginModal from "../loginModal.jsx";
import ListCard from "./listCard.jsx";

class Body extends React.Component {
    // constructor() {
    //     super();
        
    // }
    render() {
        return (
            <div>
                <div className="container-fluid px-5">
                    <h2 className="mt-5 w-100">Recommendations</h2>
                    <hr className="homeCategoryTitle" />
                    <div className="row">
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                    </div>
                    <div className="text-center my-5">
                        <button type="button" className="font-weight-bold btn btn-lg btn-outline-dark">Load more</button>
                    </div>
                </div>
                <LoginModal />
            </div>

        )
    }
}

export default Body;