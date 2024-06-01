import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import { BsChevronRight } from "react-icons/bs";
function NavItemOption({icon, optionName, redirect}) {
    const navOptionSelected = "Dashboard"
    return (
        <Link href={redirect} className={styles.NavItemOption_container}>
            <div className={`${styles.NavItemOption} ${navOptionSelected === optionName && styles.active}`}>
                <div style={{display:"flex"}}>
                    {icon}
                    <p>{optionName}</p>
                </div>
                <BsChevronRight />
            </div>
        </Link>
    );
}

export default NavItemOption;