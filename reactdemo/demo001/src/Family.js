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
                            return <li key={p + index}>{p}</li>
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
        this.state.Persons.push(this.state.pname)
        this.setState({
            Persons: this.state.Persons,
            pname: ''
        })
    }
}

export default Family