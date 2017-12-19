import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            
               <li onClick={this.props.remove}> {this.props.element} </li>
            
        );
    }
}

export default Todo;