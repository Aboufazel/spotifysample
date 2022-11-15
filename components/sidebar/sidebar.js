
import Image from "next/image";
import styles from "../../styles/Home.module.css"
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faChartColumn} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const sideMenu = [
    {id:1 , title:'Home', icon:faHome},
    {id:2 , title:'Search', icon:faSearch},
    {id:3 , title:'Your Library', icon:faChartColumn},
]



const Sidebar = () => {

    return(
        <div className={styles.sidebar}>
           <div className={styles.logo}>
               <Image src="/SpotifyLogo.png" alt="Logo" width={130} height={45}/>
           </div>
            <div className={styles.menu}>
                <ul className={styles.menu}>
                    {sideMenu.map(item =>(
                        <li key={item.id}>
                            <FontAwesomeIcon icon={item.icon} className={styles.icon}/>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default Sidebar;