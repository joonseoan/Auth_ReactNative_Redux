import { EMAIL_CHANGE, PASSWORD_CHANGE, LOG_IN, LOG_IN_FAIL } from '../actions/types'

export default (state = { email: '', password: '', user: null, error: '' }, action) => {
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
        case LOG_IN:
            return { ...state, user: action.payload };
        case LOG_IN_FAIL: 
            return { ...state, error: 'Authentication Fail' }
        default: 
            return state;
    }
}