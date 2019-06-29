import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
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

    const renderButton = () => {
        if(props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={ handleLogin }>
                Login
            </Button>
        );
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
                    value={ props.password }
                    placeholder="password"
                    // automatically it is true.
                    secureTextEntry
                    onChangeText={ password => handlePasswordChange(password) }
                />          
            </CardSection>
                { renderError() }
            <CardSection>
                { renderButton() }
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

    const { email, password, error, loading } = auth;
    console.log('auth: ', auth)
    return { 
        email,
        password,
        error,
        loading
    };
}

export default connect(mapStateToProps, { 
    emailChange, 
    passwordChange, 
    loginUser,

})(LoginForm);