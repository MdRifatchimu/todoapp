import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => {
    return ( < View style={styles.header}>
        <Text style={styles.headertext}>
            Todo App
        </Text>
    </View> )
}

const styles = StyleSheet.create({
    header: {
        marginTop:60
    },
    headertext:{
        textAlign: 'center',
        fontSize: 72,
        color:'#fff',
        fontWeight:'300'
    }
})



export default Heading