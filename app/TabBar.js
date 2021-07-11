import React from 'react'
import {View, StyleSheet} from 'react-native'
import TabBarItem from './TabBarItem'


const TabBar = ({setType, type}) => (
    <View style={styles.container}>
        <TabBarItem type = {type}  title = 'All' setType = { () => setType('All')} />
        <TabBarItem type = {type} border title = 'Activate' setType = {() => setType('Activate')} />
        <TabBarItem type = {type} border title = 'Complete' setType = {() => setType('Complete')} />
    </View>
)


const styles= StyleSheet.create({
    container:{
        height:70,
        flexDirection:'row',
        borderTopWidth: 3,
        borderTopColor: '#FF9494' 

    }


})


export default TabBar


