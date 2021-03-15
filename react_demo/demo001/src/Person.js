import React, { Component } from 'react';
import PropTypes from 'prop-types'

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

//#region 增加prop的约束
Person.propTypes = {
    persons: PropTypes.array,
    del: PropTypes.func.isRequired
}
//#endregion
//#region 增加属性的默认值设置
Person.defaultProps = {
    persons: []
}
//#endregion
export default Person;