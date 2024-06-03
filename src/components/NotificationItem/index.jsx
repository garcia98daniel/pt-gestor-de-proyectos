import React from 'react';
import styles from "./styles.module.css";

function NotificationItem({icon, notification_type, time}) {
    return (
        <div className={styles.NotificationItem}>
            {icon}
            <div>
                <p>{notification_type}</p>
                <small>{time}</small>
            </div>
        </div>
    );
}

export default NotificationItem;