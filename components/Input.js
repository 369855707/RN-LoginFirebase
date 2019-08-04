import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'


const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                autoCorrect={false}
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop:10,
        width:'100%',
        borderColor:'#eee',
        borderBottomWidth:2,

    },
    label: {
        padding:5,
        paddingBottom:0,
        color:'#333',
        fontSize:17,
        fontWeight:'700',
        width:'100%'
    },
    input : {
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:2,
        color:'#333',
        fontSize:18,
        fontWeight:'700',
        width:'100%'
    }
})

export default Input