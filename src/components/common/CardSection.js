import React from 'react';
import { View } from 'react-native';

const CardSection = props => {

    const { containerStyle } = styles;
    // use two style object simultaneously.
    // The last elememnt is always overriding the first.
    // Therefore, even though flexdirection is "row" here,
    // the value will be switeched to "column" when "prop.style" is defined
    return(<View style={ [containerStyle, props.style ]}>{ props.children }</View>);
}

const styles = {
   containerStyle: {
       borderBottomWidth: 1,
       padding: 5,
       backgroundColor: '#ffffff',
       justifyContent: 'flex-start',
       flexDirection: 'row',
       borderColor: '#dddddd',
       position: 'relative'
   }
}

export { CardSection };