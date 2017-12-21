import React from 'react';
import style from './TodoList.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: ''
        };
    }

    addTask(event) { 
        event.preventDefault();
        this.props.addTodo(this.state.textInput);
        this.setState({
            textInput: ''
        });
    }

    changeHandler(value) {
        this.setState({
            textInput: value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="wpisz tekst" 
                        value={this.state.textInput} 
                        onChange={(e) => this.changeHandler(e.target.value)} />
                    <button onClick={(event) => this.addTask(event)}>
                        Dodaj zadanie
                    </button> 
                </form>                         
            </div>           
        );
    }
}
export default TodoForm;