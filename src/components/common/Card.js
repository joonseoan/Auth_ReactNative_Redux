import React from 'react';
import { View } from 'react-native';

const Card = props => {
    const { containerStyle } = styles;

    console.log(containerStyle);
    // </View>return(<View style={ containerStyle }>
    return(<View style={ containerStyle }>
        { props.children }    
    </View>);
};

const styles = {
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#dddddd',
        borderButtomWidth: '0',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export { Card };

