import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoadingScreen from './screens/LoadingScreen'

import * as firebase from 'firebase'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Profile:{
    screen: ProfileScreen
  },
  Loading:{
    screen: LoadingScreen
  }
}, {
    initialRouteName: 'Loading',
});

firebaseConfig = {
  apiKey: "AIzaSyC3xyV6X_LYojUP6rEFe-a8Eo3yXYCR3Pc",
  authDomain: "fir-curd-4d086.firebaseapp.com",
  databaseURL: "https://fir-curd-4d086.firebaseio.com",
  projectId: "fir-curd-4d086",
  storageBucket: "fir-curd-4d086.appspot.com",
  messagingSenderId: "418349924378",
  appId: "1:418349924378:web:d456c43bfa18e21b"
};

const AppContainer = createAppContainer(AppNavigator);

export default class MyApp extends React.Component {

  render() {
    firebase.initializeApp(firebaseConfig)
    return <AppContainer />;
  }
}