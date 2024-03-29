import React from 'react';
import { connect } from 'react-redux';
import { fb_login, signup_email, login_email, errorOccur } from '../store/action';
import LoaderComp from '../config/loader';
import logo from '../assets/images/logo.png';
import $ from 'jquery';


class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            repeat_password: "",
            loginemail: "",
            loginpassword: "",
            resetemail: "",
            isLoading: false
        }
    }


    static getDerivedStateFromProps(props, state) {

        if (props.isAuthenticated === true) {

            return {
                loginemail: "",
                loginpassword: "",
                name: "",
                email: "",
                password: "",
                repeat_password: "",
                isLoading: false
            };

        } else if (props.isErrorOccured) {

            return {
                isLoading: false
            };

        }

        return {}

    }


    componentDidMount() {
        function toggleResetPswd(e) {
            // e.preventDefault();
            $('#logreg-forms .form-signin').toggle() // display:block or none
            $('#logreg-forms .form-reset').toggle() // display:block or none
        }

        function toggleSignUp(e) {
            // e.preventDefault();
            $('#logreg-forms .form-signin').toggle(); // display:block or none
            $('#logreg-forms .form-signup').toggle(); // display:block or none
        }

        $(() => {
            // Login Register Form
            $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
            $('#logreg-forms #cancel_reset').click(toggleResetPswd);
            $('#logreg-forms #btn-signup').click(toggleSignUp);
            $('#logreg-forms #cancel_signup').click(toggleSignUp);
        })
    }


    handleInputChange = (e) => {

        const value = e.target.value;
        const inputName = e.target.name;
        const inputID = e.target.id;

        this.setState({
            [inputName]: value
        });

        this.checkForm(inputID, value);

    }

    checkForm = (e, v) => {

        let TextName = document.getElementById(e);
        let parent = TextName.parentNode;
        let helper;

        if (parent.querySelectorAll('span[id="' + e + '-err"]').length === 0) {
            helper = document.createElement('span');
            helper.setAttribute("id", e + "-err")
            parent.insertBefore(helper, TextName);
        } else {
            helper = document.getElementById(e + "-err");
        }


        if (e === "inputEmail" || e === "resetEmail" || e === "user-email") {
            var mailformat = /^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (TextName.value === "") {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Enter Email";

            } else if (!mailformat.test(String(v).toLowerCase())) {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Eg: user@gmail.com";

            } else {
                document.getElementById(e + "-err").remove();
                TextName.style.borderColor = "green";
            }
        }

        if (e === "inputPassword") {

            if (TextName.value === "") {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Enter Password";
            } else {
                document.getElementById(e + "-err").remove();
                TextName.style.borderColor = "green";
            }

        } else if (e === "user-pass") {
            if (TextName.value === "") {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Enter Password";

            } else if (TextName.value.length < 6) {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Password length must be 6 or more";

            } else {
                document.getElementById(e + "-err").remove();
                TextName.style.borderColor = "green";
            }

        } else if (e === "user-repeatpass") {
            if (TextName.value === "") {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Enter Repeat Password";

            } else if (this.state.password !== TextName.value) {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "The Password must be same";

            } else {
                document.getElementById(e + "-err").remove();
                TextName.style.borderColor = "green";
            }

        } else if (e === "user-name") {
            if (TextName.value === "") {

                TextName.style.borderColor = "red";
                helper.style.color = "red";
                helper.innerHTML = "Enter Name";
            } else {
                document.getElementById(e + "-err").remove();
                TextName.style.borderColor = "green";
            }
        }

    }


    handleFbLogin = (e) => {
        e.preventDefault();

        this.props.fb_login();

    }




    handleLoginSubmit = (e) => {
        e.preventDefault();

        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");

        let parent = e.target;
        let helper1, helper2;

        if (parent.querySelectorAll('span[id="inputEmail-err"]').length === 0) {
            helper1 = document.createElement('span');
            helper1.setAttribute("id", "inputEmail-err")
            parent.insertBefore(helper1, inputEmail);
        } else {
            helper1 = document.getElementById("inputEmail-err");
        }

        if (parent.querySelectorAll('span[id="inputPassword-err"]').length === 0) {
            helper2 = document.createElement('span');
            helper2.setAttribute("id", "inputPassword-err")
            parent.insertBefore(helper2, inputPassword);
        } else {
            helper2 = document.getElementById("inputPassword-err");
        }


        if ((!this.state.loginemail) && (!this.state.loginpassword)) {
            inputEmail.style.borderColor = "red";
            inputPassword.style.borderColor = "red";

            helper1.style.color = "red";
            helper1.innerHTML = "Enter Email";

            helper2.style.color = "red";
            helper2.innerHTML = "Enter Password";

        } else if (!this.state.loginemail) {

            helper1.style.color = "red";
            inputEmail.style.borderColor = "red";
            helper1.innerHTML = "Enter Email";

        } else if (!this.state.loginpassword) {

            helper2.style.color = "red";
            inputPassword.style.borderColor = "red";
            helper2.innerHTML = "Enter Password";

        }

        let a = inputEmail.getAttribute("style").search("green");
        let b = inputPassword.getAttribute("style").search("green");


        if ((a !== -1) && (b !== -1)) {

            this.setState({
                isLoading: true
            });

            if (Object.keys(this.props.loggedin_user).length === 0) {

                let user = {
                    email: this.state.loginemail,
                    password: this.state.loginpassword
                }

                this.props.login_email(user);

            }

        }

    }


    handleSignupSubmit = (e) => {
        e.preventDefault();

        let userName = document.getElementById("user-name");
        let userEmail = document.getElementById("user-email");
        let userPass = document.getElementById("user-pass");
        let userRepeatPass = document.getElementById("user-repeatpass");

        let parent = e.target;
        let span1, span2, span3, span4;

        if (parent.querySelectorAll('span[id="user-name-err"]').length === 0) {
            span1 = document.createElement('span');
            span1.setAttribute("id", "user-name-err")
            parent.insertBefore(span1, userName);
        } else {
            span1 = document.getElementById("user-name-err");
        }

        if (parent.querySelectorAll('span[id="user-email-err"]').length === 0) {
            span2 = document.createElement('span');
            span2.setAttribute("id", "user-email-err")
            parent.insertBefore(span2, userEmail);
        } else {
            span2 = document.getElementById("user-email-err");
        }

        if (parent.querySelectorAll('span[id="user-pass-err"]').length === 0) {
            span3 = document.createElement('span');
            span3.setAttribute("id", "user-pass-err")
            parent.insertBefore(span3, userPass);
        } else {
            span3 = document.getElementById("user-pass-err");
        }

        if (parent.querySelectorAll('span[id="user-repeatpass-err"]').length === 0) {
            span4 = document.createElement('span');
            span4.setAttribute("id", "user-repeatpass-err")
            parent.insertBefore(span4, userRepeatPass);
        } else {
            span4 = document.getElementById("user-repeatpass-err");
        }


        if ((!this.state.name) && (!this.state.email) && (!this.state.password) && (!this.state.repeat_password)) {
            userName.style.borderColor = "red";
            userEmail.style.borderColor = "red";
            userPass.style.borderColor = "red";
            userRepeatPass.style.borderColor = "red";

            span1.style.color = "red";
            span1.innerHTML = "Enter Name";

            span2.style.color = "red";
            span2.innerHTML = "Enter Email";

            span3.style.color = "red";
            span3.innerHTML = "Enter Password";

            span4.style.color = "red";
            span4.innerHTML = "Enter Repeat Password";

        } else {

            if (!this.state.name) {

                span1.style.color = "red";
                userName.style.borderColor = "red";
                span1.innerHTML = "Enter Name";

            }

            if (!this.state.email) {

                span2.style.color = "red";
                userEmail.style.borderColor = "red";
                span2.innerHTML = "Enter Email";

            }

            if (!this.state.password) {

                span3.style.color = "red";
                userPass.style.borderColor = "red";
                span3.innerHTML = "Enter Password";

            } else if (this.state.password.length < 6) {

                span3.style.color = "red";
                userPass.style.borderColor = "red";
                span3.innerHTML = "Password length must be 6 or more";

            }

            if (!this.state.repeat_password) {

                span4.style.color = "red";
                userRepeatPass.style.borderColor = "red";
                span4.innerHTML = "Enter Repeat Password";

            } else if (this.state.password !== this.state.repeat_password) {

                span4.style.color = "red";
                userRepeatPass.style.borderColor = "red";
                span4.innerHTML = "The Password must be same";

            }

        }

        let a = userName.getAttribute("style").search("green");
        let b = userEmail.getAttribute("style").search("green");
        let c = userPass.getAttribute("style").search("green");
        let d = userRepeatPass.getAttribute("style").search("green");

        if ((a !== -1) && (b !== -1) && (c !== -1) && (d !== -1)) {

            this.setState({
                isLoading: true
            });

            if (Object.keys(this.props.loggedin_user).length === 0) {

                let user = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                }

                this.props.signup_email(user);

            }

        }
    }


    handleResetSubmit = (e) => {
        e.preventDefault();

        let resetEmail = document.getElementById("resetEmail");

        let parent = e.target;
        let helper;

        if (parent.querySelectorAll('span[id="resetEmail-err"]').length === 0) {
            helper = document.createElement('span');
            helper.setAttribute("id", "resetEmail-err")
            parent.insertBefore(helper, resetEmail);
        } else {
            helper = document.getElementById("resetEmail-err");
        }


        if (!this.state.resetemail) {

            helper.style.color = "red";
            resetEmail.style.borderColor = "red";
            helper.innerHTML = "Enter Email";

        }

        let a = resetEmail.getAttribute("style").search("green");

        if (a !== -1) {
            alert("success")
        }

    }

    render() {

        let isLoader = this.state.isLoading === true ?
            <LoaderComp />
            :
            null

        return (
            < div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" >
                {isLoader}
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content" id="logreg-forms">
                        <div className="modal-header">

                            {/* <h5 class="modal-title" id="loginModalLabel">Modal title</h5> */}
                            <img style={{ width: '40px' }} src={logo} alt="logo" />
                            {/* <h2>{this.state.name}</h2> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* LOGIN BOX */}
                            <div>
                                <form onSubmit={this.handleLoginSubmit} className="form-signin">
                                    <h3 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign in</h3>
                                    <div className="social-login">
                                        <button onClick={this.handleFbLogin} className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Sign in with Facebook</span> </button>
                                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g" /> Sign in with Google+</span> </button>
                                    </div>
                                    <p style={{ textAlign: 'center' }}> OR </p>
                                    <input type="email" name="loginemail" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleInputChange} value={this.state.loginemail} />
                                    <input type="password" name="loginpassword" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.loginpassword} autoComplete="current_password" />
                                    <div id="errSignin" className="text-danger"></div>
                                    <button className="btn btn-success btn-block" type="submit">Sign in</button>
                                    <a href="/#" id="forgot_pswd">Forgot password?</a>
                                    <hr />
                                    {/* <p>Don't have an account!</p>  */}
                                    <button className="btn btn-info btn-block" type="button" id="btn-signup">Sign up New Account</button>
                                </form>
                                <form onSubmit={this.handleResetSubmit} className="form-reset">
                                    <input type="email" name="resetemail" id="resetEmail" className="form-control" placeholder="Email address" onChange={this.handleInputChange} value={this.state.resetemail} />
                                    <div id="errReset" className="text-danger"></div>
                                    <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                                    <a href="/#" id="cancel_reset"><i className="fas fa-angle-left" /> Back</a>
                                </form>
                                <form onSubmit={this.handleSignupSubmit} className="form-signup">
                                    <h3 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign Up</h3>
                                    <div className="social-login">
                                        <button onClick={this.handleFbLogin} className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f" /> Sign up with Facebook</span> </button>
                                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g" /> Sign up with Google+</span> </button>
                                    </div>
                                    <p style={{ textAlign: 'center' }}>OR</p>
                                    <input type="text" name="name" id="user-name" className="form-control" placeholder="Full name" onChange={this.handleInputChange} value={this.state.name} />
                                    <input type="email" name="email" id="user-email" className="form-control" placeholder="Email address" onChange={this.handleInputChange} value={this.state.email} />
                                    <input type="password" name="password" id="user-pass" className="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} autoComplete="new_password" />
                                    <input type="password" name="repeat_password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" onChange={this.handleInputChange} value={this.state.repeat_password} autoComplete="new_repeat_password" />
                                    <div id="errSignup" className="text-danger"></div>
                                    <button className="btn btn-info btn-block" type="submit">Sign Up</button>
                                    <a href="/#" id="cancel_signup"><i className="fas fa-angle-left" /> Back</a>
                                </form>
                                <br />
                            </div>
                            {/* /LOGIN */}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    getUserData: state.getUserData,
    loggedin_user: state.loggedin_user,
    isErrorOccured: state.isErrorOccured,
    isAuthenticated: state.isAuthenticated
})

const mapDispatchToProp = (dispatch) => ({
    fb_login: () => dispatch(fb_login()),
    signup_email: (data) => dispatch(signup_email(data)),
    login_email: (data) => dispatch(login_email(data)),
    errorOccur: (data) => dispatch(errorOccur(data))
})

export default connect(mapStateToProps, mapDispatchToProp)(LoginModal);