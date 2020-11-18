import React from 'react';
import { Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import firebase from './firebase';
import history from './history';
import Home from '../containers/home/index.jsx';
import PostAd from '../containers/postad.jsx';
import ChooseCat from '../containers/chooseCat.jsx';
import Ad from '../containers/ad';
import { connect } from 'react-redux';
import { loggeduser, auth, getAdData } from '../store/action';
import LoaderComp from './loader';
import NotFound from './404.jsx';


class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: null,
            user: null,
            adPageData: null
        };
    }

    componentDidMount() {
        let that = this
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                that.setState({
                    user: user,
                    authed: true
                })

                let logged_user = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid,
                }

                that.props.loggeduser(logged_user);
                that.props.auth(true);

            } else {
                that.setState({
                    user: null,
                    authed: false
                })

                that.props.auth(false);
            }
        });

        // that.props.getAdData(history.location.pathname);
        // console.log(history.location.pathname.slice(1))
    }





    render() {



        return (
            <Router history={history}>
                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => {
                            if (this.state.authed === null) {
                                return (
                                    <div>
                                        <LoaderComp />
                                        <Home {...props} />
                                    </div>
                                )
                            }
                            if (!this.state.user) {
                                return (
                                    <Home {...props} />
                                );
                            }
                            else {
                                return (
                                    <Home {...props} />
                                );
                            }
                        }
                        }
                    />


                    <Route
                        exact path='/postAd'
                        render={(props) => {
                            if (this.state.authed === null) {
                                return (
                                    <div>
                                        <LoaderComp />
                                        <ChooseCat {...props} />
                                    </div>
                                )
                            }
                            if (!this.state.user) {
                                return (
                                    <Redirect to={{ pathname: '/' }} />
                                );
                            }
                            else {
                                return (
                                    <ChooseCat {...props} />
                                );
                            }
                        }
                        }
                    />


                    <Route
                        exact path='/postAd/details'
                        render={(props) => {
                            if (this.state.authed === null) {
                                return (
                                    <div>
                                        <LoaderComp />
                                        <PostAd {...props} />
                                    </div>
                                )
                            }
                            if (!this.state.user) {
                                return (
                                    <Redirect to={{ pathname: '/' }} />
                                );
                            }
                            else {
                                return (
                                    <PostAd {...props} />
                                );
                            }
                        }
                        }
                    />


                    <Route
                        exact path='/ad/*'
                        render={(props) => {

                            if (this.state.authed === null) {
                                return (
                                    <div>
                                        <LoaderComp />
                                        <Ad {...props} />
                                    </div>
                                )
                            }
                            if (!this.state.user) {
                                return (
                                    <Ad {...props} />
                                );
                            }
                            else {
                                return (
                                    <Ad {...props} />
                                );
                            }
                        }
                        }
                    />


                    <Route
                        exact path='/*'
                        render={(props) => {

                            return <NotFound />
                        }
                        }
                    />



                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    getData: state.getData,
})

const mapDispatchToProp = (dispatch) => ({
    loggeduser: (data) => dispatch(loggeduser(data)),
    auth: (data) => dispatch(auth(data)),
    getAdData: (data) => dispatch(getAdData(data)),
})

export default connect(mapStateToProps, mapDispatchToProp)(AppRouter);
