import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
    console.log('headerText: ---> ', headerText)
    const { textStyle, viewStyle } = style;
    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>{ headerText }</Text>
        </View>
    );
};

const style = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        // justfyContent: 'start' : top
        // justfyContent: 'center' : middle
        // justfyContent: 'end': bottom
        justfyContent: 'center',
        // alignItems: 'start' : left
        // alignItems: 'center' : center
        // alignItems: 'end': right
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        // shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // study later on
        // Make the shade noticeable 
        elevation: 10,
        position: 'relative'
    },
    textStyle: {
        paddingTop: 25,
        fontSize: 20
    }
}

// we must not use "default" when we use "export *" in index.
export { Header };

