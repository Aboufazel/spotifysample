import styles from "../../styles/Home.module.css"
import Image from 'next/image'

const AfternoonCart = ({title , pic}) => {
  return(
      <div className={styles.AfternoonCart}>
          <div className={styles.AfternoonCart__icon}>
              <Image src={pic} alt={"cartIcon"} className={styles.AfternoonCart__icon__Pic}/>
          </div>
          <div className={styles.AfternoonCart__title}>
              <h4>
                  {title}
              </h4>
          </div>
      </div>
  )
}


export default AfternoonCart;