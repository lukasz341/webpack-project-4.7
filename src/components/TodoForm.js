import React from 'react';

class TodoForm extends React.Component {



    render() {
        return (
            
            <form>
                <input type={"text"} placeholder={"wpisz tekst"} value={'Zadanie1'}/>
                <button onClick={this.props.addTodo} type="submit">
                    Dodaj zadanie
                </button>
                  
            </form>
            
        );
    }
}

export default TodoForm;