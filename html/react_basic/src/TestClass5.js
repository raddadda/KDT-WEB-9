import { Component } from 'react'; //1번방법

class TestClass5 extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick=()=>{
        alert(this.props.message);
    }
  
    render() {

       
        return <>
        <button onClick={this.handleClick}>Show Message</button>
        </>
    }
}

export default TestClass5;