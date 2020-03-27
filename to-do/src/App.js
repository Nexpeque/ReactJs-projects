import React, { Component } from 'react';
import classes from './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import uuid from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      done: false
    }
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  }
  clearList = () => {
    this.setState({
      items: []
    });
  }
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  }
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });

  }
  finishTodo = id => {
    const selectedItem = this.state.items.find(item => item.id === id);
    const filteredItems = this.state.items.filter(item => item.id !== id);
    selectedItem.done = !selectedItem.done;
    this.setState({
      items: [...filteredItems, selectedItem]
    });
  }
  render() {
    return (
      <div className={classes.app}>
        <h1 className={classes.title} >Agregar un To Do</h1>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <h1 className={classes.title} >Listar To Do</h1>
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          finishTodo={this.finishTodo}
        />
      </div>
    );
  }
}

export default App;
