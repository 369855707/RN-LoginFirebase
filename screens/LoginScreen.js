import React from 'react'

import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input'
import Button from '../components/Button'
import * as firebase from 'firebase'
import { StackActions, NavigationActions } from 'react-navigation'

export default class LoginScreen extends React.Component {

    state = {
        email: '',
        password: '',
        authenticating:false

    }

    onPressSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Home'})
                ],
              })))
            .catch(() => this.setState({
                authenticating: false,
                user: null,
                error: 'Authentication Failure'
            }))
    }

    render() {
        return (
            <View style={styles.loginScreen}>
                <Text>LoginScreen</Text>

                <Input
                    placeholder='Enter your email..'
                    label='Email'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <Input
                    placeholder='Enter your password...'
                    label='Password'
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                />
                <Button onPress={() => this.onPressSignIn()}>Log In</Button>
                {/* <Button onPress={() => this.onPressSignUp()}>Sign Up</Button> */}
                <Text style={styles.signUpTxt}> Don't have an account? <Text onPress={() => this.props.navigation.navigate('SignUp')} style={{color:'blue', fontSize: 18}}> Sign Up </Text></Text>
                <Text>{this.state.error}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    signUpTxt:{
        marginTop:10
    }
})