import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ul className='p-list'>
                {
                    this.props.persons.map((p, index) => {
                        return <li key={p + index} onClick={this.props.del.bind(this, index)}>{p}</li>
                    })
                }
            </ul>
        );
    }

    componentWillUnmount() {
        console.log('Person-->componentWillUnmount');
    }
    componentWillReceiveProps() {
        console.log('Person-->componentWillReceiveProps');
    }
    // shouldComponentUpdate() {
        
    // }
}

export default Person;