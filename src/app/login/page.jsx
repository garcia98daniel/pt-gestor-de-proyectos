"use client";
import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loginChangeForm, loginRequesting} from "../../redux/auth/login/slice";
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {values, user, password, requesting, error} = useSelector(state => state.login);
    const userLogged = useSelector(state => state.user);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginRequesting(values));
    }

    const handleChangeForm = (key, value) => {
        dispatch(loginChangeForm({ key, value }));
    };

    useEffect(() =>{
        console.log(userLogged)
        if(userLogged?.user?.id){
              router.push("/dashboard");
        }
    },[userLogged])

    return (
        <div className={styles.login_page_container}>

                <form className={styles.login_form} onSubmit={handleSubmit}>
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

                    <input 
                    required
                    value={user} 
                    onChange={(e) => handleChangeForm("user", e.target.value)}
                    className={styles.login_input} type="text" placeholder='Nombre de usuario Ej: nombre.apellido'/>
                    <input 
                    required
                    value={password} 
                    onChange={(e) => handleChangeForm("password", e.target.value)}
                    className={styles.login_input} type="password" placeholder='Aqui va tu contraseña'/>
                    {error != "" &&
                    <p className={styles.errors}>
                        {error}
                    </p>
                    }
                    <button className={styles.login_btn} type="submit">Ingresar</button>
                    <div className={styles.login_stay_logged_container}>
                        <div className={styles.checkbox_wrapper_1}>
                            <input id="example-1" className={styles.substituted} type="checkbox" aria-hidden="true" />
                            <label className={styles.label} for="example-1">Permanecer conectado</label>
                        </div>

                        <Link href={"/"} className={styles.login_recover_password}>Recuperar Contraseña</Link>
                    </div>
                </form>
        </div>
    );
}

export default Login;