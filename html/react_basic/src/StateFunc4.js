import {useState} from 'react';

export default function StateFunc4() {
    
   
    const [todos,setTodos] = useState([]);
    const [inputTodos,setInputTodo] = useState('');

    const addToto = () => {
        if(todos.length >=10 ){
            alert('할 일이 너무 많아요!');
        }
        if(inputTodos !== ''){
            const newTodo = {
                id: Date.now(),
                text: inputTodos,
                checked: false,
            };
            setTodos([...todos,newTodo])
            setInputTodo('');
        }
       
    }
    const toggleTodo = (id)=>{
        console.log("id",id);
        setTodos(
            todos.map((todo)=>{
                console.log("todo",todo)
                return todo.id === id ? {...todo,checked: !todo.checked} : todo;
            })
        );
    };
    
    const RemoveTodo=()=>{
        const result = todos.filter(value => value.checked===false)
        setTodos(result);
    }



    return (
        <div>
        <input type="text" placeholder="할 일 입력.." value={inputTodos}
        onChange={(e)=>setInputTodo(e.target.value)}
        />
        <button type="button" onClick={addToto}>추가</button>
        <ul>
        {todos.map((todo) => {
                            return (
                                <li key={todo.id}>
                                    <input type='checkbox' checked={todo.checked} onChange={()=>toggleTodo(todo.id)}/>
                                    {todo.text}
                                </li>
                            );
                            
            })}
        </ul>

    <button type="button" onClick={RemoveTodo}>삭제</button>
        </div>
    )
}
