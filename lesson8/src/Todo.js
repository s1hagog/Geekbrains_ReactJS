import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Todo = (props) => {
    
    const [todoName, setTodoName] = useState("");
    const [todoList, setTodoList] = useState([]);


    // Такой способ немного фигня полня, очень много лишнего кода
    // const [todoState, setTodoState] = useState({
    //     todoName: '',
    //     todoList: []
    // })

    useEffect(() => {
        axios.get('https://reactfirebase-633dc.firebaseio.com/todos.json')
            .then(res => {
                const todoData = res.data;
                console.log(todoData);
                const todos = [];
                for (const key in todoData){
                    todos.push({id: key, name: todoData[key].name})
                }
                setTodoList(todos)
            })
    },[])

    const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
    })


    const inputChangeHandler = (event) =>{
        setTodoName(event.target.value);
        // setTodoState({
        //     todoName: event.target.value,
        //     todoList: todoState.todoList
        // })
    }

    const todoAddHandler = () => {
        setTodoList([...todoList, todoName]);
        // setTodoState({
        //     todoName: todoState.todoName,
        //     todoList: [...todoState.todoList, todoState.todoName]
        // })

        axios.post('https://reactfirebase-633dc.firebaseio.com/todos.json', {
            name: todoName
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    // console.log(todoName);  
    return <>
        <input 
            type="text" 
            placeholder="Todo"
            onChange={inputChangeHandler}
            value={todoName}
        />
        <button onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo => (<li key={todo.id}>{todo.name}</li>))}
        </ul>
    </>
}

export default Todo;