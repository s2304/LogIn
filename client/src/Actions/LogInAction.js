import fetch  from 'node-fetch';
import {LOGINSUCCESS, LOGINFAILED} from '../Reducer/ActionTypes';

export const UserLogIn = (userDetails) => async  dispatch => {
try{
    var request = {
     
        method:'POST',
        headers: { 
            'Accept' : 'application/json, text/plain',
            'content-type': 'application/json',
            'authrization' : null
        },

        body: JSON.stringify({ 
            UserId:userDetails.UserName, 
            Passcode: userDetails.Password
        })
    };

    debugger;
    var response = await fetch("http://localhost:5000/User/LogIn", request);
    var responseData = await response.json();
debugger;
    if(responseData.Success)
    {
        dispatch({
            type: LOGINSUCCESS,
            payload: responseData.UserDetails
        });
    }
    else
    {
        dispatch({
            type: LOGINFAILED,
            payload: responseData.UserDetails
        });
    }
}
catch(error)
{
    debugger;
    var servererror = error;
}
        
}