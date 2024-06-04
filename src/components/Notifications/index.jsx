import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";
import NotificationItem from '../NotificationItem';
import { BsXLg } from "react-icons/bs";
import { useSelector } from 'react-redux';

function Notifications({ notifications_isOpen, setNotifications_isOpen }) {
  const containerRef = useRef(null);
  const {notifications} = useSelector(state => state.notifications);
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setNotifications_isOpen(false);
    }
  };

  useEffect(() => {
    if (notifications_isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notifications_isOpen]);

  if (!notifications_isOpen) {
    return null;
  }

  return (
    <div ref={containerRef} className={styles.notifications_container}>
      <p className={styles.notifications_title}>Notificaciones</p>
      <div className={styles.notifications_items_container}>
        {notifications?.map((notification, index) => (
          <NotificationItem
            key={index}
            type={notification.type}
            notification_type={notification.details}
            time={notification.time}
          />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
