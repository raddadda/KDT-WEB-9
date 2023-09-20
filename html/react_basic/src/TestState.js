import { Component } from "react";

class TestState extends Component {

    state = {
        text:'검정색 글씨',
        text2:'파란색 글씨',
        text3:'빨간색 글씨',
        color: 'black'
    }

    ColorChange=()=>{
            this.setState((prevState)=>({ text: prevState.text3}))
            this.setState((prevState)=>({ color: 'red' }))
        }

    ColorChange2=()=>{
        this.setState((prevState)=>({ text: prevState.text2}))
        this.setState((prevState)=>({ color: 'blue' }))
    }

    render() {
            const styles = {
            color: 'red'
          }
          const styles2 = {
            color: 'blue'
          }
        return <div>
            <h1 style={{color:this.state.color}}>{this.state.text}</h1>
            <button onClick={this.ColorChange}><span style={styles}>빨간색</span></button>
            <button onClick={this.ColorChange2}><span style={styles2}>파란색</span></button>
        </div>
    }
}

export default TestState;