'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation' 
import styles from './styles.module.css';
import { BsChevronRight } from "react-icons/bs";
import { useSelector } from 'react-redux';

function NavItemOption({ icon, optionName, redirect }) {

  const pathname = usePathname();
  const isActive = pathname?.includes(redirect);
  const {menu_isopen} = useSelector(state => state.generals);
  return (
    <Link href={redirect} className={styles.NavItemOption_container}>
      <div className={`${styles.NavItemOption} ${isActive ? styles.active : ''}`}>
        <div style={{ display: "flex" }}>
          {icon}
          {menu_isopen && 
          <p>{optionName}</p>
          }
        </div>
        {menu_isopen &&
        <BsChevronRight />
        }
      </div>
    </Link>
  );
}

export default NavItemOption;
