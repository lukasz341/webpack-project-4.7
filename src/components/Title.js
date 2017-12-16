import React from 'react';

class Title extends React.Component {


    render() {
        return (
            <div>
                <h2>{this.props.title} </h2>
                <h4> Liczba zadań: {this.props.todonumbers} </h4>
            </div>
        );
    }
}

export default Title;