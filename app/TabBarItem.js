import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'


const TabBarItem = ({ border, title, selected, setType, type }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress= {setType}
        style={[
            styles.item,
            selected?styles.selected: null,
            border?styles.border: null,
            type===title?styles.selected: null
        ]}
    >
        <Text
            style={[
                styles.itemText,type === title ? styles.bold : null
            ]}
        >
            {title}
        </Text>
    </TouchableHighlight>
)



const styles= StyleSheet.create({

    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffb3b3'
    },
    border:{
        borderLeftWidth: 3,
        borderLeftColor:'#FF9494',
        shadowColor:'#000',
        
        
    },
    itemText:{
        color:'#404040',
        fontSize:20,
    },
    selected:{
        backgroundColor:'#ff6666',
        
        
        
    },
    bold:{
        fontWeight:'bold',
        color:'#fff'
    }



})

export default TabBarItem