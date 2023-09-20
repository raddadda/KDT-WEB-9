import { Component } from "react";

class Counter extends Component {
    // //부모 클래스인 컴포넌트의 생성사 호출
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         number: 0,
    //     };
    //     //바인딩
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     //this.handleDecrement = this.handleDecrement.bind(this);
    // }

    state = {
        number: 0
    }
    
    // handleIncrement(){
    //     this.setState({number: this.state.number+1});
    //     console.log(this);
    // }

    handleDecrement=()=>{
        //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
        //리액트는 여러 setState 호출을 일괄 처리
        //2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않습니다.
        //this.setState({number: this.state.number-1});
        console.log(this);

        this.setState((prevState)=>{
            return {number: prevState.number -1}
        })
        this.setState((prevState)=>({ number: prevState.number -1}))
    }

    render() {
        return <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleIncrement}>증가</button>
            <button onClick={this.handleDecrement}>감소</button>
        </div>
    }
}

export default Counter;