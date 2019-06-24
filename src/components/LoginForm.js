import React from 'react';
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
        props.loginUser({ email, password});
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

const mapStateToProps = ({ auth }) => {
    return { 
        email: auth.email,
        password: auth.password 
    };
}

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);