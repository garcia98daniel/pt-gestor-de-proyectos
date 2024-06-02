import React from 'react';
import styles from './styles.module.css';

import Nav from '../Nav';
import SideMenu from '../SideMenu';
import TaskList from '../TaskList';

function Layout({children}) {
    return (
        <div className={styles.Layout_container}>
            <Nav/>
            <div className={styles.Layout_menu_currentpage_container}>
                <SideMenu/>
                <div className={styles.Layout_currentpage_container}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;