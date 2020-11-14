const INITIAL_STATE = {
    isAuthenticated: false,
    isErrorOccured: false,
    loggedin_user: {},
    select_cat: "",
    select_condition: "",
    select_type: "",
    isPosted: false,
    getData: {},
    progress: 0,

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "isAuthenticated":
            return ({
                ...state,
                isAuthenticated: action.data
            })
        case "errorOccur":
            return ({
                ...state,
                isErrorOccured: action.data
            })
        case "loggedUserData":
            return ({
                ...state,
                loggedin_user: action.data
            })
        case "SignupUser":
            return ({
                ...state,
                loggedin_user: action.data,
            })
        case "SigninUser":
            return ({
                ...state,
                loggedin_user: action.data
            })
        case "SignoutUser":
            return ({
                ...state,
                loggedin_user: {},
            })
        case "FacebookLogin":
            return ({
                ...state,
                loggedin_user: action.data
            })
        case "GoogleLogin":
            return ({
                ...state,
                loggedin_user: action.data
            })
        case "SelectCategory":
            return ({
                ...state,
                select_cat: action.data,
            })
        case "PostAd":
            return ({
                ...state,
                isPosted: action.data,
            })
        case "GetAdData":
            return ({
                ...state,
                getData: action.data,
            })
        case "Progress":
            return ({
                ...state,
                progress: action.data,
            })
        default:
            return state;
    }
}