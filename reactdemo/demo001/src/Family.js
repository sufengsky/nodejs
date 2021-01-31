import React from "react"

class Family extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Persons: ['爸爸', '妈妈'],
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
                            return <li key={p + index} onClick={this.deletePerson.bind(this,index)}>{p}</li>
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
    deletePerson = (i) => {
        let Persons = [...this.state.Persons]
        Persons.splice(i, 1)
        this.setState({
            Persons
        })
    }
}

export default Family