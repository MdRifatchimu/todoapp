import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'

const Todo = (({todo, toggleComplete, deleteTodo}) => (
   <View style = {styles.todoContainer}>
       <Text style={styles.todoText} >
            {todo.title}
       </Text>
       <View style={styles.buttons} >
       
            <TodoButton
                name='Finished'
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)} />
                
            <TodoButton 
                name='Delete'
                onPress={( ) =>deleteTodo (todo.todoIndex)}
            />
       </View>
   </View>
)
)

const styles = StyleSheet.create({
    todoContainer: {
        marginTop:10,
        marginLeft: 20,
        marginRight:20,
        backgroundColor: '#ccccff',
        borderBottomWidth:1.3,
        borderRightWidth:1.3,
        borderColor: '#6666ff',
        borderRadius:5,
        paddingLeft:14,
        paddingTop:7,
        paddingBottom: 7,
        shadowOpacity:1,
        shadowRadius:3,
        shadowColor:'#6666ff',
        shadowOffset:{width:2, height:2},
        flexDirection:'row',
        alignItems:'center'
    },
    todoText:{
        fontSize: 17,
        fontFamily: "arial",
        color:'#000'
    },
    buttons:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center'
        
    }
})


export default Todo