import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from "../components/sidebar/sidebar";
import AfternoonCart from "../components/afternoonCart/AfternoonCart";
import CartIcon from "../public/Rectangle 5.png"
import CartIcon1 from "../public/cover.jpg"
import CartIcon2 from "../public/cover2.jpg"


const afterRow1 = [
    {id:1 , title:"Pop Right Now" , pic:CartIcon},
    {id:2 , title:"Pop Right Now" , pic:CartIcon1},
    {id:3 , title:"Pop Right Now" , pic:CartIcon2},
]
const afterRow2 = [
    {id:4 , title:"Pop Right Now" , pic:CartIcon},
    {id:5 , title:"Pop Right Now" , pic:CartIcon1},
    {id:6 , title:"Pop Right Now" , pic:CartIcon2},
]

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
                    {
                        afterRow1.map(item => (
                            <AfternoonCart  title={item.title} pic={item.pic}/>
                        ))
                    }

                </div>
                <div className={styles.rightSide_TopBox__cart}>
                    {
                        afterRow2.map(item => (
                            <AfternoonCart title={item.title} pic={item.pic}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
