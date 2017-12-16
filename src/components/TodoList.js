import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

class TodoList extends React.Component {
    get data() {
        return this.props.data.map(element => <Todo remove={this.props.removeTodo(element.id)} key={element.id} element={element.text}/> );
      }
     
    render() {
        return (
            <div>
                <ol>                         
                {this.data}  
                </ol>     
            </div>
        );
    }
}

export default TodoList;





