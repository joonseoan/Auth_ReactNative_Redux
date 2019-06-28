import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';

import { emailChange, passwordChange, loginUser } from '../actions';


const LoginForm = props => {

    // const[ email, setEmail ] = React.useState('');
    // const[ password, setPassword ] = React.useState('');
    const handleEmailChange = text => {
        props.emailChange(text);
    }

    const handlePasswordChange = text => {
        props.passwordChange(text);
    }

    const handleLogin = () => {
        const { email, password } = props;
        props.loginUser({ email, password });
    }

    const renderError = () => {
        if(props.error) {
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ styles.errorTextStyle }>
                        { props.error }
                    </Text>
                </View>
            );
        }
    }

    return (
        <Card>
            <CardSection>
                <Input
                    label="Email"
                    value ={ props.email }
                    placeholder="email@email.com"
                    onChangeText={ email => handleEmailChange(email) }
                />
            </CardSection>
            <CardSection>
                <Input
                    label="Password"
                    // value={ props.password }
                    placeholder="password"
                    // automatically it is true.
                    secureTextEntry
                    onChangeText={ password => handlePasswordChange(password) }
                />          
            </CardSection>
            { renderError() }
            <CardSection>
                <Button 
                    onPress={ handleLogin }
                >
                    Login
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    return { 
        email: auth.email,
        password: auth.password,
        error: auth.error
    };
}

export default connect(mapStateToProps, { 
    emailChange, 
    passwordChange, 
    loginUser 
})(LoginForm);