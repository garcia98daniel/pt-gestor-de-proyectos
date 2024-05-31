import React from 'react';
import styles from './styles.module.css';
import { BsLayoutWtf } from "react-icons/bs";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import NavItemOption from '../NavItemOption';
function SideMenu() {
    return (
        <div className={styles.SideMenu}>
                <NavItemOption
                icon={<BsLayoutWtf />}
                optionName={"Dashboard"}
                redirect={"/dasboard"}
                />
                <NavItemOption
                icon={<BsLayoutTextWindowReverse />}
                optionName={"Proyectos"}
                redirect={"/porjects"}
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