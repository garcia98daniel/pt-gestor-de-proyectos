'use client';
import styles from './page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeUserName } from "./redux/generalsEffects/slice";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  // const dispatch = useDispatch();
  // const {name} = useSelector(state => state.user);
  useEffect(() => {

    router.push("/login");

  },[]);


  return (
    <main className={styles.main}>
      {/* <h1>{name}</h1>
      <input type="text" value={name} onChange={(e) => dispatch(changeUserName(e.target.value))}/> */}
    </main>
  )
}
