import React from 'react';
import style from './TodoList.css';

class TodoForm extends React.Component {

    addTask(event) { 
     
      let wartosc = document.querySelector('input').value 
        event.preventDefault();
        this.props.addTodo(wartosc);
    }

    render() {
        return (
            <div>
                <form>
                     <input type="text" placeholder="wpisz tekst"  />
                </form>
                <button onClick={(event) => this.addTask(event)}>
                    Dodaj zadanie
                </button>          
            </div>           
        );
    }
}
export default TodoForm;