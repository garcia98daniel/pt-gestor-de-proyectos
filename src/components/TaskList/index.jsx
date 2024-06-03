import React from 'react';
import styles from "./styles.module.css";
import { BsXLg } from "react-icons/bs";
import TaskPendingItem from '../TaskPendingItem';
function TaskList({taskList_isOpen, setTaskList_isOpen}) {
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
                {["task1", "task2", "task3"].map((item) => {
                    return (<TaskPendingItem taskName={item}/>)
                })}
            </div>
        </div>
    );
}

export default TaskList;