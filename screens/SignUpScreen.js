import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import * as firebase from 'firebase'

export default class SignUpScreen extends React.Component {

    state = {
        email: '',
        password: '',
        authenticating: false
    }

    onPressSignUp() {
        this.setState({
            error: '',
            authenticating: true
        })

        const { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(() => this.setState({
                authenticating: false,
                user: null,
                error: 'Sign Up Failure'
            }))
    }

    render() {
        return (
            <View style={styles.signUpScreen}>
                <Text>SignUpScreen</Text>
                <Input
                    placeholder='Enter your email..'
                    label='Email'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <Input
                    placeholder='Enter your password'
                    label='Password'
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                />

                <Button onPress={() => this.onPressSignUp()}>Sign Up</Button>
                <Text>{this.state.error}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signUpScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})