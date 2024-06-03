import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";
import { BsPower } from "react-icons/bs"; // Asegúrate de importar el ícono

function Logout({ logout_isOpen, setLogout_isOpen }) {
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setLogout_isOpen(false);
    }
  };

  useEffect(() => {
    if (logout_isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [logout_isOpen]);

  if (!logout_isOpen) {
    return null;
  }

  return (
    <div ref={containerRef} className={styles.logout}>
      <BsPower />
      <p>Logout</p>
    </div>
  );
}

export default Logout;
