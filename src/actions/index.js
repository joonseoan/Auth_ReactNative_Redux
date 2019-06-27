import { EMAIL_CHANGE, PASSWORD_CHANGE, LOG_IN, LOG_IN_FAIL, LOG_IN_USER } from './types';
import * as firebase from 'firebase';

export const emailChange = text => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    };
};

export const passwordChange = text => {
    return {
        type: PASSWORD_CHANGE,
        payload: text
    }
}

// make sure aynch promise with then function can not be used in action creator
// The reason we need to use redux thunk is to use a callback invocation in the second function.
// "dispatch" is a call back to deliver "action" to a reducer.
// When the asychronous function is finished, (if it is simple redux action creator), 
//  there is is no way to deliver the value to reducer because the general redux can just return object only.
// In order to eventually deliver the action value with asynchronous function, we need another function
//  that will be able to invoke the callback, "dispatch".

export const loginUser = ({ email, password }) => dispatch => {

    dispatch({ type: LOG_IN_USER});
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => userAuth(user, dispatch))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => userAuth(user, dispatch))
            .catch(() => authFail(dispatch))
        })
}

const userAuth = (user, dispatch) => {
    dispatch({ type: LOG_IN, payload: user});
}

const authFail = dispatch => {
    dispatch({ type: LOG_IN_FAIL })
}
