import React from 'react';
import { connect } from 'react-redux';
import { getAdData } from '../store/action';

class Ad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getDataKey: null,
            loggedin_user: null,
            isAuthenticated: null,
            adTitle: null,
            adDescription: null,
            selectType: null,
            selectCondition: null,
            adPrice: null,
            // adPriceConvert: null,
            locationState: null,
            locationCity: null,
            adMobileNo: null,
            dateTime: null,
            uploadedImages: null,
            isLoading: false,
            keyLink: null,
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.props.getAdData()
    }

    render() {

        Object.entries(this.props.getData).map(function (v, i) {
            return ([

                // <ListCard adData={v[1]} key={i} />

            ]);
        })

        // console.log(this.state.adDescription)
        return (

            <div>
                <h1>Under Development</h1>
            </div>

        );
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

export default connect(mapStateToProps, mapDispatchToProp)(Ad);
