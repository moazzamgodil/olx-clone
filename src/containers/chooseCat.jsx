import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SelectCategoryBtn from './category/selectcategorybtn'
import { connect } from 'react-redux';
import { selectcategory } from '../store/action';
import history from '../config/history';


class ChooseCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select_cat: ""
        }
    }

    goBack = () => {
        history.goBack();
    }


    componentDidUpdate() {

        this.selector(this.state.select_cat)
    }


    selectCatFunction = (e) => {

        const selector = e.currentTarget;

        this.setState({
            select_cat: selector.getAttribute("title")
        });

    }
    
    
    selector = (e) => {
        
        if (e !== "") {
            
            for (var i = 0; i < document.getElementsByClassName("category-box").length; i++) {
                
                var a = document.getElementsByClassName("category-box")[i].getAttribute("id");
                if (a === e) {
                    document.getElementById(a).style.backgroundColor = "lavender";
                }
                else {
                    document.getElementById(a).style.backgroundColor = "";
                }
            }
            
            this.props.selectcategory(this.state.select_cat);

            history.push("/postAd/details");
        }

    }

    render() {


        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <span onClick={this.goBack}><i className="fas fa-arrow-left post-ad-back" /></span>
                    <a className="navbar-brand" href="/#"><img className="logo2" src={logo} alt="logo" /></a>
                </nav>
                <div className="text-center mt-4">
                    <h3 className="font-weight-bold">POST YOUR AD</h3>
                </div>
                <div className="choose-category border rounded mb-4">
                    <h5 className="my-4 ml-4 font-weight-bold">CHOOSE A CATEGORY</h5>
                    <div className="col-6">
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-mobile-alt" title="Mobiles" />
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-car" title="Cars" />
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-motorcycle" title="Motorcycles" />
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-home" title="Houses" />
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-tablet-alt" title="Tablet" />
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-laptop" title="Computer &amp; Accessories" />
                        <SelectCategoryBtn onClick={this.selectCatFunction} icon="fas fa-tv" title="TV - Video - Audio" />

                    </div>
                </div>
                <footer className="bg-light">
                    <div className="d-flex align-items-center bg-info px-5 py-4 text-light">
                        <div>
                            <p className="h6 m-0">Free Classfieds in Pakistan</p>
                        </div>
                        <div className="ml-auto">
                            <p className="h6 m-0">© 2020, BuySell Now</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    select_cat: state.select_cat,
    isAuthenticated: state.isAuthenticated
})

const mapDispatchToProp = (dispatch) => ({
    selectcategory: (data) => dispatch(selectcategory(data))
})

export default connect(mapStateToProps, mapDispatchToProp)(ChooseCategory);