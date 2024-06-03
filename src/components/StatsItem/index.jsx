import React from 'react';
import styles from './styles.module.css';

function StatsItem({title, quantity, details, bgcolor}) {
    return (
        <div className={styles.stat} style={{background:bgcolor}}>
            <small>{title}</small>
            <p>{quantity}</p>
            <small>{details}</small>
        </div>
    );
}

export default StatsItem;