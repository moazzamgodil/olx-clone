import React from 'react';
import { connect } from 'react-redux';
import { getAdData } from '../../store/action';
import LoaderComp from '../../config/loader';
import LoginModal from "../loginModal.jsx";
import ListCard from "./listCard.jsx";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    static getDerivedStateFromProps(props, state) {

        if (Object.keys(props.getData).length !== 0) {

            return {
                isLoading: false
            };

        } else {

            return {
                isLoading: false
            };

        }

        // return {}

    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.props.getAdData()
    }

    render() {
        // console.log(this.props.getData)

        let fetchdata = Object.keys(this.props.getData).length !== 0 ?

            Object.entries(this.props.getData).map(function (v, i) {
                return ([

                    <ListCard adData={v[1]} key={i} />

                ]);
            })
            :
            <div className="text-center w-100">
                <h4>No Ads Available</h4>
            </div>


        let isLoader = this.state.isLoading === true ?
            <LoaderComp />
            : fetchdata

        return (
            <div>
                <div className="container-fluid px-5">
                    <h2 className="mt-5 w-100">Recommendations</h2>
                    <hr className="homeCategoryTitle" />
                    <div className="row">
                        {/* <ListCard /> */}
                        {isLoader}
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


const mapStateToProps = (state) => ({
    loggedin_user: state.loggedin_user,
    isAuthenticated: state.isAuthenticated,
    getData: state.getData,
})

const mapDispatchToProp = (dispatch) => ({
    getAdData: () => dispatch(getAdData()),
})

export default connect(mapStateToProps, mapDispatchToProp)(Body);
