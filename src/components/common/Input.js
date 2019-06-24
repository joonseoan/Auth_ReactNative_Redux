import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder,  secureTextEntry }) => {
  
    const { inputStyle, labelStyle, containerStyle } = styles;
    return(
        <View style={ containerStyle }>
            {/* Text here : label */}
            <Text style={ labelStyle }>{ label }</Text>
            <TextInput
                // do not auto correct whare typeing
                autoCorrect={ false }
                placeholder={ placeholder }
                value={ value }
                onChangeText={ onChangeText }
                // 1)
                // secureTextEntry={ label === "Password" ? true : false }
                // 2)
                secureTextEntry={ secureTextEntry }
                style={ inputStyle }
            />
        </View>
    );
};


const styles = {
    inputStyle: {
      height: 40,
      width: 100,
      color: '#000000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      // 100% width
      flex: 1,
      // row type
      flexDirection: 'row',
      alignItems: 'center'
    }
  };

// const styles = {
//     inputStyle: {
//         // height: 40,
//         // width: 100,
//         color: '#000000',
//         paddingRight: 5,
//         paddingLeft: 5,
//         fontSize: 18,
//         lineHeight: 23,
//         // 70%
//         flex: 2
//     },
//     labelStyle: {
//         fontSize: 18,
//         paddingLeft: 20,
//         // 30%
//         flex: 1
//     },
//     containerStyle: {
//         margin: 15,
//         height: 40,
//         // 100 %
//         flex: 1,
//         // row tyoe
//         flextDirection: 'row',
//         align: 'center'
//     }
// }

export { Input };