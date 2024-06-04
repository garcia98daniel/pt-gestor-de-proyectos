import React from 'react';
import styles from './styles.module.css';
import { BsLayoutWtf } from "react-icons/bs";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import NavItemOption from '../NavItemOption';
import { useSelector } from 'react-redux';
function SideMenu() {
  const {menu_isopen} = useSelector(state => state.generals);

    return (
        <div className={`${styles.SideMenu} ${menu_isopen ? styles.active : ''}`}>
                <NavItemOption
                icon={<BsLayoutWtf />}
                optionName={"Dashboard"}
                redirect={"/dashboard"}
                />
                <NavItemOption
                icon={<BsLayoutTextWindowReverse />}
                optionName={"Proyectos"}
                redirect={"/projects"}
                />
                <NavItemOption
                icon={<BsPersonPlus />}
                optionName={"Usuarios"}
                redirect={"/users"}
                />
                <NavItemOption
                icon={<BsArrowsFullscreen />}
                optionName={"Roles"}
                redirect={"/rols"}
                />
        </div>
    );
}

export default SideMenu;