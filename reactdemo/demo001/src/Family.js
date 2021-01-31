import React from "react"

class Family extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Persons: ['张三', '李四'],
            pname: '',
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.pname} onChange={this.pnamechange} />
                    <button onClick={this.add}>增加人员</button>
                </div>
                <ul className='p-list'>
                    {
                        this.state.Persons.map((p, index) => {
                            return <li key={p + index} data-index={index} onClick={this.deletePerson}>{p}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    pnamechange = (e) => {
        console.log(e.target.value)
        this.setState({
            pname: e.target.value
        })
    }
    add = () => {
        this.setState({
            Persons: [...this.state.Persons, this.state.pname],
            pname: ''
        })
    }
    deletePerson = (e) => {
        let index = e.target.getAttribute('data-index')
        if (index) {
            let Persons = [...this.state.Persons]
            Persons.splice(index, 1)
            this.setState({
                Persons
            })
        }
    }

}

export default Family