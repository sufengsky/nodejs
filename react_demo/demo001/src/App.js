import React from 'react'

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         msg: "test_msg"
    //     }
    // }

    state = {
        msg: 'test_msg'
    }

    btnClick = () => {
        this.setState({
            msg: "abc"
        })
    }


    render() {
        const {msg} = this.state
        return (
            <div>
                <p>{msg}</p>
                <button onClick={this.btnClick}>确定</button>
            </div>
        )
    }
}

export default App
