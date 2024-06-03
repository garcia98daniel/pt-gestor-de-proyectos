"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './styles.module.css';

const Custom404 = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
       <div className={styles.main_container}>
        <h1>404</h1>
        <div>
        <h3>SORRY!</h3>
        <p>
          Parece que a donde vas no es a donde podemos ir...
        </p>
        </div>
       </div>
       <Link href={"/dashboard"}>Regresar al dashboard</Link>
       <small>Copiright&#169;2021 All rights reserved OLSoftware</small>
    </div>
  );
};

export default Custom404;
