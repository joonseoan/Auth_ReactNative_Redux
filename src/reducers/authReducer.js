import { EMAIL_CHANGE, PASSWORD_CHANGE } from '../actions/types'

export default (state = { email: '', password: '' }, action) => {
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
        default: 
            return state;
    }
}