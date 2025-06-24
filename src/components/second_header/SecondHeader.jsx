import styles from './SecondHeader.module.css'

export default function SecondHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.sides}>
                <div className={styles.leftSide}>
                    <img src="./second_header/logo.svg" alt="" />
                    <p className={styles.logoText}>Федерация фехтования<br />оренбургской области</p>
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.headerButton}>главная</p>
                    <p className={styles.headerButton}>Федерация</p>
                    <p className={styles.headerButton}>Соревнования</p>
                    <p className={styles.headerButton}>Сборная орб</p>
                    <p className={styles.headerButton}>клуб</p>
                </div>
            </div>
        </div>
    )
};
