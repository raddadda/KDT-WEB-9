import {useState} from 'react';

export default function ToggleFunc() {

    const [status,setStatus] = useState(false)
    const [status2,setStatus2] = useState('보여라')

    const handleToggle = () =>{
        if(status === false){
            setStatus(true);
            setStatus2('보여라');
        }else{
            setStatus(false);
            setStatus2('사라져라');
        }
    }
    return <div>
        <button onClick={handleToggle}>{status2}</button>
        <p>{status && '안녕하세요'}</p>
    </div>
}