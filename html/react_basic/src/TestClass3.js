import { Component } from 'react'; //1번방법

class TestClass3 extends Component {
    render() {
        const foodstyle={
        color: 'red'
       }
        return <>
          <div>저는 <span style={foodstyle}>{this.props.food}</span>을 소개하겠습니다.</div>
          <div><span style={foodstyle}>{this.props.food}</span>은 매콤한 양념에 각종 채소와 볶아서 만드는 돼지고기볶음입니다.</div>
        </>
    }
}

TestClass3.defaultProps = {
    food: '제육',
}
export default TestClass3;