import React, { Component } from 'react';
import TodoItem from "../TodoItem/TodoItem";
import classes from './TodoList.css'
export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit, finishTodo } = this.props
        var content = items.map(item => {
            return (
                <TodoItem
                    key={item.id}
                    title={item.title}
                    done={item.done}
                    handleDelete={() => { handleDelete(item.id) }}
                    handleEdit={() => { handleEdit(item.id) }}
                    finishTodo={() => { finishTodo(item.id) }}
                />)
                ;
        });
        return (
            <div className={classes.block}>
                <ul>
                    {content}
                </ul>
                <button className={classes.button} onClick={clearList}>Limpiar lista</button>
            </div>
        )
    }
}
