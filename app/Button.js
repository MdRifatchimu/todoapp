import { getWidth } from 'jimp'
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'


const Button = ({ submitTodo }) => {
    return(
        <View style={styles.buttonContainer}>
            <TouchableHighlight
                underlayColor='#000'
                style= {styles.button}
                onPress={submitTodo}
            >
                <Text style={styles.submit}>
                    Submit 
                </Text>
            </TouchableHighlight>
        </View>
    )
}


const styles=StyleSheet.create({
    buttonContainer:{
        alignment:'flex-end',
        alignItems:'center'

    },
    button: {
        height:50,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: '#ffffb3',
        width:200,
        marginRight:100,
        marginLeft:100,
        marginTop:25,
        borderWidth:1.5,
        borderRadius:10,
        borderColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity : 0.5,
        shadowRadius : 3,
        shadowColor : '#ff4d4d',
        shadowOffset : { width: 2, height: 2 }
        
    },
    
    submit : {
        color:'#000',
        fontWidth:'300',
        alignItems:'center'
    }

})


export default Button