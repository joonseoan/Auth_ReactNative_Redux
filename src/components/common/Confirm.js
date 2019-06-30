import React from 'react';
import { Text, View, Modal } from 'react-native';

// Component is placed in the sale directory.
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { containerStyle, cardSectionStyle, textStyle } = styles;
    return(
        <Modal
            // modal hidden or visible 
            visible={ visible }
            // (partially seethrough)
            transparent
            animationType="slide"
            // Mandatory in Android 
            // Must specify the property and function
            // We do not want to do anything here.
            onRequestClose={ () => {} }
        >
            <View style={ containerStyle }>
                <CardSection style={ cardSectionStyle }>
                    <Text style={ textStyle }>
                        { children }
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={ onAccept }>YES</Button>
                    <Button onPress={ onDecline }>NO</Button>
                </CardSection>
            </View>
        </Modal>
    );    
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40 // heigt of the line
    },
    containerStyle: {
        // 0.75: Opacity
        backgroundColor: `rgba(0, 0, 0, 0.75)`,
        justifyContent: 'center',
        position: 'relative',
        flex: 1
    }
}

export { Confirm };