import React from 'react';

class TodoForm extends React.Component {

    addTask(event) { 
      //  let wpisz= 'zadanie1'; 
      let wartosc = event.target.value; 
        event.preventDefault();
        this.props.addTodo(wartosc);
    }

    render() {
        return (
            <div>
                <form>
                     <input type="text" placeholder="wpisz tekst" value="tata1"  />
                </form>
                <button onClick={(event) => this.addTask(event)}>
                    Dodaj zadanie
                </button>          
            </div>           
        );
    }
}
export default TodoForm;