import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from "../components/sidebar/sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <Sidebar/>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.rightSide_TopBox}>
               <h2>
                   {"Good afternoon"}
               </h2>
                <div className={styles.rightSide_TopBox__cart}>
                    <p>cart</p>
                    <p>cart</p>
                    <p>cart</p>
                    <p>cart</p>
                </div>
                <div className={styles.rightSide_TopBox__cart}>
                    <p>cart</p>
                    <p>cart</p>
                    <p>cart</p>
                    <p>cart</p>
                </div>
            </div>
        </div>
    </div>
  )
}
