import React from 'react';
import styles from "./styles.module.css";
import { BsXLg } from "react-icons/bs";
import TaskPendingItem from '../TaskPendingItem';
import { useSelector } from 'react-redux';
function TaskList({taskList_isOpen, setTaskList_isOpen}) {

    const {todos} = useSelector(state => state.todos);
    // console.log(todos);

    if(!taskList_isOpen){
        return null;
    }
    return (
        <div className={styles.TaskList}>
            <div className={styles.TaskList_header}>
                <div></div>
                <p className={styles.TaskList_title}>Pendientes</p>
                <BsXLg onClick={() => setTaskList_isOpen(prev => !prev)}/>
            </div>

            <div className={styles.TaskList_pending}>
                <p>Que tienes pendiente?</p>
                <button>Agregar</button>
            </div>

            <div className={styles.TaskList_container}>
                {todos?.map((todo) => {
                    return (<TaskPendingItem taskName={todo.description} checked={todo.check}/>)
                })}
            </div>
        </div>
    );
}

export default TaskList;