import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";
import NotificationItem from '../NotificationItem';
import { BsXLg } from "react-icons/bs";

function Notifications({ notifications_isOpen, setNotifications_isOpen }) {
  const containerRef = useRef(null);

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
        {[1, 2, 3, 4, 5].map((_, index) => (
          <NotificationItem
            key={index}
            icon={<BsXLg />}
            notification_type={"Error Despliegue"}
            time={"Hace 6 días"}
          />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
