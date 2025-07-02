import styles from './Schedule.module.css'

export default function Schedule() {
    return (
        <div className={styles.schedule}>
            <h1 className={styles.title}>Расписание</h1>
            <hr className={styles.hr}/>
            <img src="/coachs/schedule.svg" alt="" />
        </div>
    )
};
