import React from 'react';
import Header from './components/header.jsx';
import ToDo from './components/todo.jsx';
import Form from './components/form.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.initialData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(id) {
    let todos = this.state.todos.map((todo)=> {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos
    });

  }

  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo=>todo.id !== id);
    this.setState({
      todos
    });
  }

  handleEdit(id, title) {
    let todos = this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.title= title;
      }
      return todo;
    });

    this.setState({todos});
  }

  handleAdd(title) {

    let todo = {
      id: this.nextId(),
      title,
      completed: false
    };

    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos}/>
        <section className="todo-list">
          {this.state.todos.map((todo, i) =>
            <ToDo
              key={i}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onChange={this.handleChange}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}

            />)

          }
        </section>
        <Form onAdd={this.handleAdd}/>
      </main>
    )
  }
}
App.propTypes = {
  title: React.PropTypes.string,
  initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  }))
};
App.defaultProps = {
  title: 'React todo'
};

