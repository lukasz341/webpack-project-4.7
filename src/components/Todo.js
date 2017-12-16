import React from 'react';

class Todo extends React.Component {



    render() {
        return (
            <div>
               <li onClick={this.props.remove}> {this.props.element} </li>
            </div>
        );
    }
}

export default Todo;