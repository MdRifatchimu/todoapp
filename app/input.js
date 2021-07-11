import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


const Input = ({inputValue, inputChange }) => {
    return (
        <View style ={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                value = {inputValue}
                placeholder = 'Write What You Want to Remember? '
                placeholderTextColor = '#000000'
                selectionColor = '#cc3300'
                onChangeText={inputChange}


                />
        </View>
    )
}


const styles = StyleSheet.create(
{
    inputContainer: {
        marginTop:10,
        marginLeft : 20,
        marginRight : 20,
        shadowOpacity : 0.5,
        shadowRadius : 3,
        shadowColor : '#ff4d4d',
        shadowOffset : { width: 2, height: 2 },
        
    }, 
    input: {
        height: 60,
        backgroundColor: '#ffe6ff',
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default Input 