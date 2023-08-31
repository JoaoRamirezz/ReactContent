import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap"
import './style.css'


// import useTasks from '../../hooks/TasksHook';

function ToDoList() {
    var [task, setTask] = useState('')
    var [count, setCount] = useState(0)
    var [Tasks, setList] = useState([
        {
            id: count,
            name: "Limpar a casa"
        }
    ])


    function setIds(List) {
        List.map(task => {
            task.id -= 1
        })
    };


    function add() {
        setCount(count += 1)
        const newtask = {
            id: count,
            name: task
        }

        setList([...Tasks, newtask]);
    };

    function remove(id) {
        setList(Tasks.filter(item => item.id !== id));
    };

    const RenderList = () => {
        return Tasks.map(Task => {
            return (
                <table>
                    <th>ID</th>
                    <th>Task</th>
                    <tr>
                        <td>{Task.id}</td>
                        <td>{Task.name}</td>
                        <Button onClick={() => remove(Task.id)} variant='danger'>Del</Button>
                    </tr>
                </table>
            )
        })
    }


    return (
        <>
            <div className='main'>

                <RenderList />

                <div className='add'>
                    <input onChange={(e) => setTask(e.target.value)} />
                    <Button onClick={add} variant='success'>Add Task</Button>
                </div>
            </div>
        </>

    );
}
export default ToDoList;