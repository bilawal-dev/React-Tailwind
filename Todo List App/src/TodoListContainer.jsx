import "./TodoListContainer.css"
import todoListHeadingImage from "./images/icon.png"
import todoListUncheckedImage from "./images/unchecked.png"
import todoListCheckedImage from "./images/checked.png"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoListContainer(){

    const [tasks , setTasks] = useState([])
    const [taskInput , setTaskInput] = useState('')

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('Data'))
        if(!savedTasks){
            setTasks([])
        }
        else{
            setTasks(savedTasks)

        }
    } , [])

    useEffect(() => {
        localStorage.setItem('Data' , JSON.stringify(tasks))
    } , [tasks])


    function addTodoListTask(event){
        if(taskInput === ''){
            return;
        }

        setTasks((prevTask) => [...prevTask , {task : taskInput , id : uuidv4() , isDone : false , isEditing : false}])
        setTaskInput('')
    }

    function handleInputChange(event){
        setTaskInput(event.target.value)
    }

    function markCompletedTask(targetID){        
        setTasks((prevTasks) => {
            return prevTasks.map((eachPrevTask) => {
                return targetID === eachPrevTask.id ? {...eachPrevTask , isDone : !eachPrevTask.isDone} : eachPrevTask
            })
        })

    }

    function removeTodoListTask(targetID){
        setTasks((prevTasks) => prevTasks.filter((eachPrevTask) => eachPrevTask.id !== targetID))
    }

    function editTodoListTask(targetID){          
        setTasks((prevTasks) => {
            return prevTasks.map((eachPrevTask) => {
                return targetID === eachPrevTask.id ? {...eachPrevTask , isEditing : !eachPrevTask.isEditing}: eachPrevTask
            })
        })
    }
    function handleTaskEditChange(event , targetID){
        setTasks((prevTask) => {
            return prevTask.map((eachPrevTask) => {
                return targetID === eachPrevTask.id ? {...eachPrevTask , task : event.target.value} : eachPrevTask
            })
        })
    }

    function markAllTaskComplete(){
        let isAllTasksComplete = tasks.every((task) => {
            return task.isDone
        })

        setTasks((prevTasks) => {
            return prevTasks.map((eachPrevTask) => {
                if(isAllTasksComplete){
                    return {...eachPrevTask , isDone : false}
                }
                else if(!isAllTasksComplete){
                    return {...eachPrevTask , isDone : true}
                }
            })
        })
    }

    function removeAllTask(){
        setTasks([])
    }


    return(
        <div className="todoListContainer">
            <div className="todoListHeadingContainer">
                <h1>To-Do List</h1>
                <img src={todoListHeadingImage}/>
            </div>

            <div className="todoListInputContainer">
                <input onChange={handleInputChange} value={taskInput} type="text" placeholder="Add Your Task"/>
                <button onClick={addTodoListTask}>Add</button>
            </div>

            <div className="todoListTaskContainer">
                {
                    tasks.map((task) => { 
                        const taskStyle = task.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'}

                        return (
                            <div className="task" key={task.id}>
                                    <img onClick={() => {markCompletedTask(task.id)}} src={task.isDone ? todoListCheckedImage : todoListUncheckedImage}/>
                                    {task.isEditing ? <input type="text" className="taskUpdate" name="taskUpdate" value={task.task} placeholder={task.task} onChange={(event) => {handleTaskEditChange(event , task.id)}}></input>  : <h1 onClick={() => {markCompletedTask(task.id)}} style={taskStyle}>{task.task}</h1>}
                                    <i onClick={() => {editTodoListTask(task.id)}} className="ri-edit-2-fill updateTaskBtn"></i>
                                    <i onClick={() => {removeTodoListTask(task.id)}} className="ri-close-large-fill removeTaskBtn"></i>
                            </div>
                        )
                    })
                }
            </div>

            {tasks.length !== 0 && (
                <div className="todoListEndButtons">
                    <button onClick={markAllTaskComplete}>Mark All Tasks As Done</button>
                    <button onClick={removeAllTask}>Remove All Tasks</button>
                </div>
            )}

        </div>
    )
}