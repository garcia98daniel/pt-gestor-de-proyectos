import React from 'react';
import styles from './styles.module.css';

import Nav from '../Nav';
import SideMenu from '../SideMenu';

function Layout({children}) {
    return (
        <div className={styles.Layout_container}>
            <Nav/>
            
            <SideMenu/>
        </div>
    );
}

export default Layout;