import { Component } from 'react'; //1번방법
import imgLogo from './weed.png';
class TestClass2 extends Component {
    render() {
        return <>
            <div className='style'>
                <h2>
                    안녕하세요
                    
                </h2>
                <img src={imgLogo}/>
            </div>
        </>
    }
}

export default TestClass2;