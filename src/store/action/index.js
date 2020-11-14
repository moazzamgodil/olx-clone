import firebase from '../../config/firebase';

const auth = (data) => {
    return (dispatch) => {
        dispatch({
            type: "isAuthenticated",
            data: data
        })
    }
}

const signup_email = (data, history) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(function (result) {
            var curr_user = firebase.auth().currentUser;

            curr_user.updateProfile({
                displayName: data.name
            }).then(function () {

                window.$('#loginModal').modal('hide');
                // history.push('/postAd');

                var user = result.user

                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid
                }

                dispatch({
                    type: "SignupUser",
                    data: create_user
                })

                dispatch({
                    type: "errorOccur",
                    data: false
                })

            }, function (error) {
                console.log(error)
            });

        }).catch(function (error) {

            // var errorCode = error.code;
            var errorMessage = error.message;

            dispatch({
                type: "errorOccur",
                data: true
            })

            setTimeout(() => {
                dispatch({
                    type: "errorOccur",
                    data: false
                })
            },
                2000);

            if (errorMessage) {

                document.getElementById("errSignup").innerHTML = errorMessage;

            }
        });
    }
}


const login_email = (data) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function (result) {

            window.$('#loginModal').modal('hide');

            var user = result.user

            let logged_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }

            dispatch({
                type: "SigninUser",
                data: logged_user
            })

            dispatch({
                type: "errorOccur",
                data: false
            })

        })
            .catch(function (error) {

                var errorMessage = error.message;

                dispatch({
                    type: "errorOccur",
                    data: true
                })

                setTimeout(() => {
                    dispatch({
                        type: "errorOccur",
                        data: false
                    })
                },
                    2000);

                if (errorMessage) {

                    document.getElementById("errSignin").innerHTML = errorMessage;

                }
            });
    }
}


const signout = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            dispatch({
                type: "SignoutUser",
            })
        }).catch(function (error) {
            // An error happened.
        });
    }
}


const selectcategory = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SelectCategory",
            data: data
        })
    }
}

const loggeduser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "loggedUserData",
            data: data
        })
    }
}


const errorOccur = (data) => {
    return (dispatch) => {
        dispatch({
            type: "erroroccur",
            data: data
        })
    }
}


const keyGen = (keyLength) => {
    var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    var charactersLength = characters.length;

    for (i = 0; i < keyLength; i++) {
        key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
    }

    return key;
}

const postAd = (data) => {
    return (dispatch) => {

        var uid = data.loggedin_user.uid;

        // Get Date
        var today = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var dd = String(today.getDate()).padStart(2, '0');
        var mm = months[today.getMonth()];
        var yyyy = today.getFullYear();

        today = dd + ' ' + mm + ', ' + yyyy;

        var images = [];

        const storageRef = firebase.storage();
        Object.entries(data.itemImages).map(function (v, i) {
            let key = keyGen(30);

            return ([

                storageRef.ref(`adImages/${key}`).put(v[1].image)
                    .on("state_changed",
                        (snapshot) => {
                            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                            dispatch({
                                type: "Progress",
                                data: progress
                            })
                        },
                        (error) => {
                            console.log(error)
                        },
                        () => {
                            storageRef.ref('adImages').child(key).getDownloadURL().then(url => {

                                images[i] = url;


                                if ((i + 1) >= data.itemImages.length) {

                                    let keyLink = keyGen(10);

                                    firebase.database().ref("ads" + "/" + "List").push().set({

                                        "select_cat": data.select_cat,
                                        "selectType": data.selectType,
                                        "adTitle": data.adTitle,
                                        "adDescription": data.adDescription,
                                        "adPrice": data.adPrice,
                                        "locationState": data.locationState,
                                        "locationCity": data.locationCity,
                                        "adMobileNo": data.adMobileNo,
                                        "uploadedImages": images,
                                        "postedBy": data.loggedin_user.name,
                                        "uid": data.loggedin_user.uid,
                                        "date": today,
                                        "keyLink": keyLink,

                                    });

                                    dispatch({
                                        type: "PostAd",
                                        data: true
                                    })

                                }



                            })
                        })

            ]);

        })

    }
}


const isPostedtoNull = (data) => {
    return (dispatch) => {

        dispatch({
            type: "PostAd",
            data: data
        })

    }
}



const getAdData = () => {
    return (dispatch) => {

        firebase.database().ref("ads").on("child_added", function (item) {

            // console.log(item)

            dispatch({
                type: "GetAdData",
                data: item.val()
            })
        });
    }
}


export {
    auth,
    loggeduser,
    errorOccur,
    signup_email,
    login_email,
    signout,
    selectcategory,
    postAd,
    isPostedtoNull,
    getAdData,
}