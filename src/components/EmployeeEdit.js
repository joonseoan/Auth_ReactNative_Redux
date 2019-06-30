import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeEditSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common/index';
import EmployeeForm from './EmployForm';

const EmployeeCreate = props => {

    const [ modalDisplay, setModalDisplay ] = React.useState(false);

    React.useEffect(() => {

        // object ==> array then enter key and value 
        //  to update name, phone and shift based on the current value 
        _.each(props.employee, (value, prop) => {
            props.employeeUpdate({ prop, value })
        })

    }, [])

    const onTextPress = () => {
        const { phone, shift } = props;
        // Android: working in both Emulator and phone, iOS: not working in Emulator
        // Texting function.
        // phone: phone number
        // string: message
        Communications.text(phone, `Your upcomming shfit is on ${ shift }`);
    }

    const onButtonPress = () => {
        const { name, phone, shift } = props;
        props.employeeEditSave({ name, phone, shift, uid: props.employee.uid });
    }

    // just close Modal
    onDecline = () => {
        setModalDisplay(false);
    }

    onAccept = () => {
        props.employeeDelete({uid: props.employee.uid });
    }

    return(
      <Card>
        <EmployeeForm { ...props } />
        <CardSection>
            <Button onPress={ onButtonPress }>
                EDIT AND SAVE
            </Button>
        </CardSection>
        <CardSection>
            <Button onPress={ onTextPress }>
                TEXT NEW SCHEDULE
            </Button>
        </CardSection>

        <CardSection>
            <Button onPress={ () => setModalDisplay(!modalDisplay) }>
                FIRE EMPLOYEE
            </Button>
        </CardSection>
        
        <Confirm
            visible={ modalDisplay }
            onAccept={ onAccept }
            onDecline={ onDecline }
        >
            Are you sure you ant to delete this?
        </Confirm>
      </Card>
    );
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { 
        employeeUpdate, employeeEditSave, employeeDelete 
    })(EmployeeCreate);