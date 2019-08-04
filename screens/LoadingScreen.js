import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {

    componentDidMount() {
        console.log('run componentDidMount');
        // firebase.auth().onAuthStateChanged(user => {
        //     this.props.navigation.navigate(user ? 'Home' : 'SignUp')
        // })
        const user = firebase.auth().currentUser
        // this.props.navigation.navigate(user ? 'Home' : 'SignUp')

        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: user ? 'Home': 'Login' })
            ],
          }))
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    Loading Screen
                </Text>
                <ActivityIndicator
                    size='large'
                    color='grey'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    }
})