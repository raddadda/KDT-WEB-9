import { Component } from 'react'; //1번방법
import './Test.css';
class TestClass extends Component {
   
    render() {
        const name= "최영찬";

        return <>
        <div className="my_style">{name}</div>
        </>
    }
}

export default TestClass;