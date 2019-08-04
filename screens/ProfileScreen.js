import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style = {styles.profileScreen}>
                <Text>
                    ProfileScreen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileScreen : {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})