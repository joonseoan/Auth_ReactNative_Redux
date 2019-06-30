import React from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common/CardSection';

export default props => {
    const { name } = props.employee.item;

    console.log('name ========> ', name)
    
    return (
        <View>
            <CardSection>
                <Text
                    style={ styles.titleStyle }
                >
                    { name }
                </Text>
            </CardSection>
        </View>
    );
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}