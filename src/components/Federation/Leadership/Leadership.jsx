import styles from './Leadership.module.css'

export default function Leadership() {
    return(
        <div className={styles.leadership}>
            <h1 className={styles.title}>Руководство Федерации Фехтования Оренбургской области</h1>
            <hr className={styles.hr}/>
            <img src="./federation/sveta.svg" alt="" />
            <p className={styles.underImg}>Президент федерации фехтования оренбургской области</p>
            <p className={styles.underImg}><strong>ЩУКИНА СВЕТЛАНА ПАВЛОВНА</strong></p>
        </div>
    )
};
