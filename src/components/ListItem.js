import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common/CardSection';
import { Actions } from 'react-native-router-flux';

export default props => {

    const { name } = props.employee.item;
    console.log('item:  ------------>  ', props.employee.item)

    const onRowPress = () => {

        // By using FlatList
        Actions.employeeEdit({ employee: props.employee.item });

        // By using ListView
        // "employee: props.employee" : sending an employee's information
        // key: employee ==> props key
        // value: props.employee
        // Actions.employeeEdit({ employee: props.employee});
    }
    
    return (
        <TouchableWithoutFeedback onPress={ onRowPress }>
            <View>
                <CardSection>
                    <Text
                        style={ styles.titleStyle }
                    >
                        { name }
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}