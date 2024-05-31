import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
function index({}) {
    return (
        <div className={styles.login_page_container}>

                <form className={styles.login_form}>
                    <i className={styles.login_logo_container}>
                        <Image src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software-230x64.png" 
                        alt="logo"
                        width={200}
                        height={200}
                        />
                    </i>
                    <div className={styles.login_welcome_txt_container}>
                        <p>Bienvenido al gestor de proyectos!</p>
                        <p>Necesitamos tu usuario y contraseña</p>
                    </div>

                    <input className={styles.login_input} type="text" placeholder='Nombre de usuario Ej: nombre.apellido'/>
                    <input className={styles.login_input} type="password" placeholder='Aqui va tu contraseña'/>

                    <button className={styles.login_btn} type="submit">Ingresar</button>
                    <div className={styles.login_stay_logged_container}>
                        <div>
                            <div className={styles.checkbox_wrapper_1}>
                                <input id="example-1" className={styles.substituted} type="checkbox" aria-hidden="true" />
                                <label for="example-1">Checkbox</label>
                            </div>
                            
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default index;