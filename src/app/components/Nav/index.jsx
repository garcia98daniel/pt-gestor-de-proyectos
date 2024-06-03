"use client";
import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { BsList } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsPower } from "react-icons/bs";
import TaskList from '../TaskList';
import Notifications from '../Notifications';
import Logout from '../Logout';

function Nav() {
    const [taskList_isOpen, setTaskList_isOpen] = useState(false);
    const [notifications_isOpen, setNotifications_isOpen] = useState(false);
    const [logout_isOpen, setLogout_isOpen] = useState(false);
    return (
        <nav className={styles.Layout_nav}>
                <TaskList
                taskList_isOpen={taskList_isOpen} 
                setTaskList_isOpen={setTaskList_isOpen}
                />
                <Notifications
                notifications_isOpen={notifications_isOpen} 
                setNotifications_isOpen={setNotifications_isOpen}
                />
                <Logout
                logout_isOpen={logout_isOpen}
                setLogout_isOpen={setLogout_isOpen}
                />

                <div className={styles.Layout_nav_left_side} >
                    <i className={styles.Layout_logo_container} >
                        <Image src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software-230x64.png" 
                        alt="logo"
                        width={100}
                        height={100}
                        />
                    </i>

                    <BsList size={"20px"}/>
                </div>

                <div className={styles.Layout_nav_right_side}>
                    <BsBell onClick={() => setNotifications_isOpen(prev => !prev)} />
                    <i onClick={() => setLogout_isOpen(prev => !prev)}>
                        <Image src="/imgs/userprofile.png" 
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </i>
                    <BsThreeDots 
                     className={styles.Layout_task_icon}
                     onClick={() => setTaskList_isOpen(prev => !prev)}/>
                </div>
        </nav>
    );
}

export default Nav;