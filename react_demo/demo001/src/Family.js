import React from "react"
import Person from './Person'

class Family extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Persons: ['张三', '李四'],
            pname: '',
        }
    }

    render() {
        console.log("Family-->render")
        return (
            <div>
                <div>
                    <input value={this.state.pname} onChange={this.pnamechange} ref={input => this.input = input} />
                    <button onClick={this.add}>增加人员</button>
                </div>
                {
                    this.state.Persons.length > 0 ? <Person persons={this.state.Persons} del={this.deletePerson} /> : null
                }
            </div>
        )
    }

    //#region 生命周期函数
    componentWillMount() {
        console.log('Family-->componentWillMount')
    }
    componentDidMount() {
        console.log('Family-->componentDidMount')
    }
    componentWillUpdate() {
        console.log('Family-->componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('Family-->componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('Family-->componentWillUnmount');
    }
    //#endregion

    //#region dom 方法
    pnamechange = (e) => {
        //#region 使用ref的方法拿到dom中元素及属性
        // console.log(this.input)
        // console.log(this.input.value)
        ////#endregion
        
        //console.log(e.target.value)
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
    deletePerson = (index) => {
        let Persons = [...this.state.Persons]
        Persons.splice(index, 1)
        this.setState({
            Persons
        })
    }
    //#endregion

}

export default Family