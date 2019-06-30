import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

import { Card, CardSection, Button, Input } from './common/index';

const EmployeeCreate = props => {
    const onButtonPress = () => {
        const { name, phone, shift } = props;
        props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

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
        <CardSection 
            // this is not natural attribute of React Native.
            // this is prop definition to CardSection because CardSection is built by myself
            // the way to use two style props or objects in the CardSection whichi is View is to use an arry.
            // Please fin the CardSection component
            // style={{ flexDirection: 'column' }} 

            style={{ padding:13 }}
        >
            <Text style={ styles.pickerTextStyle }>Shift</Text>
            <View
                style={{
                    // justifyContent: 'flex-start', 
                    // flexDirection: 'row', 
                    // position: 'relative', 
                    // paddingLeft: 15, 
                    // paddingRight: 15 
                    flex: 1,
                    paddingLeft: 20
                }}
            >
                <Picker 
                    // just remind that without "style",it won't render the jsx,
                    // but it will take over the space
                    style={{ flex: 1 }}

                    // setting defalut value
                    selectedValue={ props.shift }
                    onValueChange={ value => props.employeeUpdate({ prop: 'shift', value})} 
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Tursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </View>
        </CardSection>
        <CardSection>
            <Button onPress={ onButtonPress }>
                CREATE
            </Button>
        </CardSection>
      </Card>
    );
}

const styles= {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    console.log(name, phone)
    return { name, phone, shift };
}



export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
// export default EmployeeCreate;