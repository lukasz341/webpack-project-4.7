import React from 'react';
import App from './App.js';

class TodoList extends React.Component {


    get data() {
        return this.props.data.map(element => <li key={element.id}>{element.text} </li>);
      }
     
      

    render() {
        return (
            <div>
                <h3> Zadania </h3>
                <h4 onClick={id => this.removeTodo(id)}>{this.data}</h4>

                
               
            </div>
        );
    }
}

export default TodoList;





