import React from 'react';
import { Link } from 'react-router-dom';

class ListCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            select_cat: this.props.adData.select_cat,
            adTitle: this.props.adData.adTitle,
            adDescription: this.props.adData.adDescription,
            selectType: this.props.adData.selectType,
            selectCondition: this.props.adData.selectCondition,
            adPrice: this.props.adData.adPrice,
            adPriceConvert: this.props.adData.adPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            locationState: this.props.adData.locationState,
            locationCity: this.props.adData.locationCity,
            adMobileNo: this.props.adData.adMobileNo,
            dateTime: this.props.adData.date,
            uploadedImages: this.props.adData.uploadedImages,
            keyLink: this.props.adData.keyLink,
        }
    }

    render() {

        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <Link to={"ad/" + this.state.keyLink} className="listcardstyle card">
                    <img className="card-img-top" src={this.state.uploadedImages[0]} alt="thumbnail" />
                    <div className="card-body">
                        <h4 className="card-title m-0">{this.state.adPriceConvert}</h4>
                        <p className="card-text text-muted small">{this.state.adTitle}</p>
                        <div className="mt-5 d-flex justify-content-between listcardfoot">
                            <p className="h6 text-muted font-weight-light">{this.state.locationCity}, {this.state.locationState}</p>
                            <p className="h6 text-muted font-weight-light">{this.state.dateTime}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListCard;