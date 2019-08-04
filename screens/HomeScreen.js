import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            loginUser : null
        }
    }

    componentDidMount() {
        debugger;
        this.setState({
            loginUser : firebase.auth().currentUser
        })
        
        console.log(firebase.auth().currentUser)
    }


    signOut = () => {
        firebase.auth().signOut();
        this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Login'})
        ],
      }))
    }

    render() {
        return (
            <View style={styles.homescreen}>
                <Text>Home Screen</Text>
                <Text style={{ fontSize: 20 }}>
                    Hi, {firebase.auth().currentUser.email}
                </Text>
                <Text 
                style={styles.txt}
                onPress={this.signOut}>
                    logout
                </Text>
            </View>
            /* <Button
                title='go to detail'
                onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Login' })
                        ],
                      }))
                }}
            /> */
        )
    }
}

const styles = StyleSheet.create({
    homescreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    txt:{
        fontSize:30,
        color:'red'
    }
})