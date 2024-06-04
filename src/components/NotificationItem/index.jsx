import React from 'react';
import styles from "./styles.module.css";
import { BsExclamationCircleFill } from "react-icons/bs";
import { BsFillNutFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
function NotificationItem({type, notification_type, time}) {
    return (
        <div className={styles.NotificationItem}>
            {type === "error" && <BsExclamationCircleFill/>}
            {type === "warning" && <BsFillNutFill/>}
            {type === "info" && <BsFillInfoCircleFill/>}
            <div>
                <p>{notification_type}</p>
                <small>{time}</small>
            </div>
        </div>
    );
}

export default NotificationItem;