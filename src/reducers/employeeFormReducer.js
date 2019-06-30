import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state=INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            // delete the current state stored by the previous action
            return INITIAL_STATE; // state; // No!!! the current state has the current stored value.
        default:
            return state;
    }   
}