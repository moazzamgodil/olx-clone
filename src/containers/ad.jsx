import React from 'react';
import { connect } from 'react-redux';
import { getAdPage, getUser } from '../store/action';
import LoaderComp from '../config/loader';
import history from '../config/history';
import AdPage from '../containers/ad/adpage';

class Ad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            isLoading: false,
        }
    }

    static getDerivedStateFromProps(props, state) {

        if (Object.keys(props.getAdPageData).length !== 0) {

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
        this.props.getAdPage(history.location.pathname.slice(4));
    }

    getUserDataFunc = () => {
        this.props.getUser(this.props.getAdPageData.uid);
    }

    componentDidUpdate() {
        if (Object.keys(this.props.getAdPageData).length !== 0) {
            if (Object.keys(this.props.getUserData).length === 0) {
                this.getUserDataFunc()
            }
        }
    }

    render() {

        var that = this;

        let checkfetchdata = Object.keys(this.props.getUserData).length !== 0 ?
            <AdPage data={that.props.getAdPageData} loggedin_user={that.props.loggedin_user} isAuthenticated={that.props.isAuthenticated} getUserData={that.props.getUserData} />
            : null


        let isLoader = this.state.isLoading === true ?
            <LoaderComp />
            : checkfetchdata


        return (

            <div>
                {isLoader}
                {/* <h1>Under Development</h1> */}
            </div>

        );
    }

}


const mapStateToProps = (state) => ({
    loggedin_user: state.loggedin_user,
    isAuthenticated: state.isAuthenticated,
    getAdPageData: state.getAdPageData,
    getUserData: state.getUserData,
})

const mapDispatchToProp = (dispatch) => ({
    getAdPage: (data) => dispatch(getAdPage(data)),
    getUser: (data) => dispatch(getUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProp)(Ad);
