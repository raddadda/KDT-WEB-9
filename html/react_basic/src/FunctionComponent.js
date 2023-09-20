//함수형 컴포넌트
//function 컴포넌트명 or const 컴포넌트명 =()=>{}
import PropTypes from 'prop-types';

function FunctionComponent(props) {
    const myClass = 'kdt9'

    return (
        <>
        <h1>반갑습니다. {myClass}에 오신것을 환영합니다.</h1>
        <p>여기는 함수형 컴포넌트</p>
        <h2>props{props.myClass}</h2>
        <h2>{props.children}</h2>
        </>
    );

}

FunctionComponent.defaultProps = {
    myClass:'kdt'
}
FunctionComponent.prototype = {
    myClass: PropTypes.string,
}
export default FunctionComponent;