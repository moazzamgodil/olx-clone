import React from 'react';

class SelectCategoryBtn extends React.Component {
    render() {
        return (
            <label className="category-box row font-weight-normal my-0" style={{}} id={this.props.title}>
                <input className="checkCategory" type="radio" name="category" title={this.props.title}  style={{ width: '0px' }} onClick={this.props.onClick} />
                <div className="col-2 text-center ml-0 pl-0">
                    <i className={this.props.icon} />
                </div>
                <p>{this.props.title}</p>
                <i className="ml-auto fas fa-angle-right" />
            </label>
        );
    }
}

export default SelectCategoryBtn;