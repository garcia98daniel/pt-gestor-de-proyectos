import React from 'react';
import styles from "./styles.module.css";
import { BsXLg } from "react-icons/bs";

function TaskPendingItem({taskName, checked}) {
    return (
        <div className={styles.TaskPendingItem}>
            <div className={styles.checkbox_wrapper_1}>
                <input id="example-1" className={styles.substituted} type="checkbox" aria-hidden="true" checked={checked} />
                <label className={styles.label} for="example-1">{taskName}</label>
            </div>
            <BsXLg />
        </div>
    );
}

export default TaskPendingItem;