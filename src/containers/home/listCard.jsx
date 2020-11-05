import React from 'react';
import image from '../../assets/images/upload/phone.jpg';

class ListCard extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="listcardstyle card">
                    <img className="card-img-top" src={image} />
                    <div className="card-body">
                        <h4 className="card-title m-0">Rs 50,000</h4>
                        <p className="card-text text-muted small">Iphone 10</p>
                        <div className="mt-5 d-flex justify-content-between listcardfoot">
                            <p className="h6 text-muted font-weight-light">Karachi, Pakistan</p>
                            <p className="h6 text-muted font-weight-light">oct 02</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCard;