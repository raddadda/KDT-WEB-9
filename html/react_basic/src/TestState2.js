import { Component } from "react";

class TestState2 extends Component {

    state = {
        text:'사라져라',

        text3:'안녕하세요',
        text4:'',
    }

    TextChange=()=>{
            if(this.state.text == '사라져라'){
                console.log("@@");
                this.setState(()=>({ text: '보여라'}))
                this.setState(()=>({ text3:''}))
            }else{
                this.setState(()=>({ text: '사라져라'}))
                this.setState(()=>({ text3:'안녕하세요'}))
            }
           
            
        }
    render() {
        return <div>
              <button onClick={this.TextChange}>{this.state.text}</button>
            <h1>{this.state.text3}</h1>
          
        </div>
    }
}

export default TestState2;