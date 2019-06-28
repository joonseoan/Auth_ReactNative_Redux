import { EMAIL_CHANGE, PASSWORD_CHANGE, LOG_IN, LOG_IN_FAIL, LOG_IN_USER } from '../actions/types'
const INITIAL_STATE = { 
    email: '', 
    password: '', 
    user: null, 
    error: '', 
    loading: false 
};

export default (state = INITIAL_STATE, action) => {
    console.log('action in reducer: ', action)
    switch(action.type) {
        case EMAIL_CHANGE:
            /// can't redux recognize the updat in this case.
            //      because redux refer to "state" indicator only.
            //      not indicates "state.email"

            // state.email = action.payload
            // return state;

            // Therefore, we need to make new object by using  {...state } ==> It is a new object
            //  and use deep clone for redux to recognize that state value is updated.
            return { ...state, email: action.payload };
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload };
        // Whenever the user enter the login button...it executes!!!
        case LOG_IN_USER:
            return { ...state, loading: true, error: '' };
        // Log_in : enter the button ------ receive response 
        case LOG_IN:
            // Because data fetched from redux store, while the user is navigating the app, the input still has the input value.
            // In order to delete the value, we can use INITIAL_VALUE or {email: '', password: ''}
               return { ...state, ...INITIAL_STATE, user: action.payload };
         //   return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' };
         // Log_in : enter the button ------ login and signu ------- Error message
        case LOG_IN_FAIL: 
            return { ...state, error: 'Authentication Fail', loading: false, password: '' };
        default: 
            return state;
    }
}