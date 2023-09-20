import { Component } from 'react'; //1번방법
import imgLogo from './weed.png';
//import React from 'react'; //2번방법
import PropTypes from 'prop-types';

//class형 컴포넌트
//class 컴포넌트명 extends Component{} //1번방법
//class ClassComponent extends React.Component {} //2번방법
class ClassComponent extends Component {
    
    //클래스형 컴포넌트에서는 render 함수는 필수
    render() {

        const name = "홍길동"
        const {age} = this.props;
        return <>

            <h1>Hello {name}</h1>
            <h2>안녕하세요 {this.props.name}</h2>
            <h2>나이는 {age}</h2>
            <p>여기는 클래스형 컴포넌트</p>

            {/* <div className="container">
                React애벌레 실습
                    <div className="one">
                        <div className="white-eye">
                            <div className="black-eye"></div>
                        </div>
                    </div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                    <img src={imgLogo}/>
            </div> */}
        </>
    }
}

ClassComponent.defaultProps = {
    name: '임꺽정',
    age:13,
}
ClassComponent.PropTypes = {
    //필수로 넣기
    name: PropTypes.string.isRequired,
    age:PropTypes.string
}
export default ClassComponent;