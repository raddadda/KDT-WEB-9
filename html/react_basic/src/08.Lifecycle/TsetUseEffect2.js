import { useState,useEffect } from "react";
import axios from 'axios';

export default function TsetUseEffect2() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const axiosUser = async () => {
            const result = await axios({
                method: "get",
                url : "https://jsonplaceholder.typicode.com/users",
            })
            setUsers(result.data);
            setLoading(true);
        };
        axiosUser();
        
    },[]);
    
    useEffect(()=>{
        console.log("유저 정보 업데이트", users.length);
    },[users])



    return (
        <div>
            {loading ? <ul>
                {users.map((users)=>
                {
                    return <li key={users.id}>
                        {users.name} - {users.email}
                        </li>
                })}
            </ul>:<div>loading...</div>}
            
        </div>
    )
}