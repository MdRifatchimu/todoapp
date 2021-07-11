import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TodoButton=({onPress,complete,name}) =>(
    <TouchableHighlight
        onPress= {onPress}
        underlayColor='#efefef'
        style={styles.button}>
            <Text style={[styles.Text, complete?styles.complete : null, name === 'Delete'? styles.deleteButton : null]}>
                {name}
            </Text>
        </TouchableHighlight>
)

const styles=StyleSheet.create({
    button:{
        alignSelf:'flex-end',
        padding:7,
        borderColor: '#ffe6ee',
        borderWidth:2,
        borderRadius:5,
        marginRight:5,
        shadowColor: '#e6e6ff',
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    text:{
        color:'ff3300',
    },
    complete:{
        color:'#009900',
        fontWeight: 'bold'
        
    },
    deleteButton:{
        color:'#ff3300'
    }

})

export default TodoButton