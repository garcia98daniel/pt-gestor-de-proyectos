'use client';
import styles from './page.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeUserName } from "./redux/generalsEffects/slice";

export default function Home() {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.user);
  return (
    <main className={styles.main}>
      {/* <h1>{name}</h1>
      <input type="text" value={name} onChange={(e) => dispatch(changeUserName(e.target.value))}/> */}
    </main>
  )
}
