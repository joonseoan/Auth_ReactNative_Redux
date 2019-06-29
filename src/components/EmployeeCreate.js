import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { Card, CardSection, Button, Input } from './common/index';

const EmployeeCreate = props => {
    return(
      <Card>
        <CardSection>
            <Input 
                label="Name"
                placeholder="Jane"
                value={ props.name }
                onChangeText={ value => props.employeeUpdate({ prop: 'name', value }) }
            />
        </CardSection>
        <CardSection>
            <Input 
                label="Phone"
                placeholder="555-555-5555"
                value={ props.phone }
                onChangeText={ value => props.employeeUpdate({ prop: 'phone', value }) }
            />
        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
            <Button>
                CREATE
            </Button>
        </CardSection>
      </Card>
    );
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    console.log(name, phone)
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
// export default EmployeeCreate;