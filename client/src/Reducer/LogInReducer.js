import {LOGINFAILED, LOGINSUCCESS} from './ActionTypes';

const InitialState = {
    UserDetails: {},
    IsUserLoggedIn: false
}

const LogInReducer = (state = InitialState, action) => {

    const {type, payload } = action;

    debugger;
    switch(type)
    {
      
        case LOGINSUCCESS:
            {
                return{
                    ...state,
                    UserDetails: payload.UserDetails,
                    IsUserLoggedIn : true
                }
            }
        case LOGINFAILED:
            {
                return{
                    ...state,
                    UserDetails: {},
                    IsUserLoggedIn : false
                }
            }
        default:
            {
                return {...state};
            }
    }

}

export default LogInReducer;