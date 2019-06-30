import * as firebase from 'firebase';

// import { EMPLOYEE_CREATE } from './types';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH } from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };

}

export const employeeCreate = ({ name, phone, shift }) => {
    // console.log(name, phone, shift)
    /* 
            [Rules we set up in firebase website]

              {
                "rules": {
                        "users": {
                            "$uid": {
                                ".read": "$uid === auth.uid",
                                ".write": "$uid === auth.uid"
                            }
                         }
                    }
                } 

    */

    // Get the current login user: uid property
    const { currentUser } = firebase.auth();

    // ReduxThunk but we won't use reducers just for the creation.
    // So we do not need "dispatch" parameter
    // Just remind that without returning function or object
    //  that will generate an error emssage.
    // In this case, we need to return asyn and promise.
    // For this reason, we need to define the returning function which is a reduxThunk.
    //1) 
    // return () => {

    //     //'/users/userId/employees': path of the JSON store in firebase
    //     // the most parent object property : "users" above
    //     //  the second parent property: "uid" ===> currentUser.uid from "firebase.auth()" ==> manager
    //     //  the third parent property: "employees" inside of uid
    //     firebase.database().ref(`/users/${ currentUser.uid }/employees`)
    //         // create new employee in firebse
    //         /* 
    //         manager-b7288 (firebase creator)
    //             users (manager: the most parent property)
    //                 sSRDHgp5r5gA0QnAGXmezoclvJK2  (manager's uid)
    //                     employees (employees property)
    //                         -Li_SHXH3sn7t9t46joG (employees's id which is automatically generated)
    //                             name: 
    //                             "Joon"
    //                             phone: 
    //                             "555-555-5555"
    //                             shift: 
    //                             "Monday"
            
    //         */      
    //         .push({ name, phone, shift })
    //         // type: reset ==> to delete the back button
    //         // Whenever we navigate to a same destination
    //         //  from another start point, the back button
    //         //  is created again.  
    //         .then(() => Actions.employeeList({ type: 'reset' }));
    // }

    // 2) Add state reset by using dispatch
    return dispatch => {

        firebase.database().ref(`/users/${ currentUser.uid }/employees`)
            .push({ name, phone, shift })
            .then(() => dispatch({ type: EMPLOYEE_CREATE }))
            .then(() => { 
                Actions.employeeList({ type: 'reset' });
                // dispatch({ type: EMPLOYEE_CREATE });
            });
    } 


}


export const employeeFetch = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        // firebase's fetching data is persisient, 
        //      in a entire lifecyle of the app like reducer's state
        // fetching the entire employees
        firebase.database().ref(`/users/${ currentUser.uid }/employees`)
            // Whenever it comes accross 'value', it will be fetching the data.
            .on('value', get => {
                // snapshot.val() ===> returned value
                dispatch({ type: EMPLOYEE_FETCH, payload: get.val() });
            })
    }
}