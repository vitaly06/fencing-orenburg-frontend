import styles from './Announcement.module.css'

export default function Announcement() {
    return (
        <div className={styles.announcementBlock}>
            <div className={styles.leftSide}>
                <div className={styles.text}>
                    <p className={styles.calendarTitle}>Календарь соревнований</p>
                    <hr className={styles.hr}/>
                    <p className={styles.calendarDescription}>В списке указаны ближайшие мероприятия, в которых участвуют
фехтовальщики Оренбурга.</p>
                </div>
                <div className={styles.eventBlock}>
                    <div className={styles.date}>27 <br/><span>июня</span></div>
                    <div className={styles.date}>29 <br/><span>июня</span></div>
                    <p className={styles.eventName}>Международные соревнования «Рапира Санкт-Петербурга»</p>
                </div>
                <p className={styles.allCalendar}>Весь календарь соревнований</p>
            </div>
            <div className={styles.rightSide}>
                <p className={styles.rightTitle}>Объявления, актуальная информация</p>
                <div className={styles.news}>
                    <p className={styles.newsTitle}>Подготовлено Положение о турнире, рапира, до 15 лет</p>
                    <p className={styles.newsDate}>18.04.2025</p>
                </div>
                <div className={styles.news}>
                    <p className={styles.newsTitle}>Открыт прием заявок</p>
                    <p className={styles.newsDate}>01.04.2025</p>
                </div>
                <div className={styles.news}>
                    <p className={styles.newsTitle}>Об списках сборных</p>
                    <p className={styles.newsDate}>18.03.2025</p>
                </div>
            </div>
        </div>
    )
};
