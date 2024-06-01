import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { BsList } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function Nav() {
    return (
        <nav className={styles.Layout_nav}>
                <div className={styles.Layout_nav_left_side}>
                    <i className={styles.Layout_logo_container}>
                        <Image src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software-230x64.png" 
                        alt="logo"
                        width={100}
                        height={100}
                        />
                    </i>

                    <BsList size={"20px"}/>
                </div>

                <div className={styles.Layout_nav_right_side}>
                    <BsBell />
                    <i>
                        <Image src="/imgs/userprofile.png" 
                        alt="logo"
                        width={30}
                        height={30}
                        />
                    </i>
                    <BsThreeDots />
                </div>
        </nav>
    );
}

export default Nav;