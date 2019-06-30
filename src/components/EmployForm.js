import React, { useState, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, Input } from './common';
import {  employeeUpdate } from '../actions';

const EmployeeForm = props => {
    console.log('Form prop: ', props)

    return (
        <View>

             <CardSection>
                <Input 
                    label="Name"
                    placeholder="Jane"
                    value={ props.name }
                    onChangeText={ value => props.employeeUpdate({ prop: 'name', value })
                       
                    }
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
                style={{ padding:13 }}
            >
                <Text style={ styles.pickerTextStyle }>Shift</Text>
                <View
                    style={{
                        flex: 1,
                        paddingLeft: 20
                    }}
                >
                    <Picker 
                        style={{ flex: 1 }}
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
        </View>
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
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);