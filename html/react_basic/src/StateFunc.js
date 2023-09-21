import {useState} from 'react';

export default function ToggleFunc() {

    // const red = {
    //     color:'red'
    // }
    // const blue = {
    //     color:'blue'
    // }
    // const black = {
    //     color:'black'
    // }

    const [text,setStatus] = useState('검정색 글씨')
    const [textColor,setStatus2] = useState('black')

    const handleToggle = () =>{
       setStatus('빨간색 글씨')
        setStatus2('red')
    }
    const handleToggle2 = () =>{
        setStatus('파란색 글씨')
        setStatus2('blue')
     }

    return <div>
        <div style={{color: textColor}}>{text}</div>
        <button onClick={handleToggle}>빨간색</button>
        <button onClick={handleToggle2}>파란색</button>
    </div>
}