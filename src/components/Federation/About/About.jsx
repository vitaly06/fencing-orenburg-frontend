import styles from './About.module.css'

export default function About() {
    return(
        <div className={styles.about}>
            <div className={styles.text}>
                <h1 className={styles.title}>Федерация фехтования Оренбурга</h1>
                <p className={styles.facts}>Цели, достижения, цифры и факты</p>
                <p className={styles.mainTask}>Основной задачей Федерация фехтования Оренбурга является
развитие и популяризация фехтования в Оренбурга.</p>
                <div className={styles.list}>
                    <p >Федерация объединяет:</p>
                    <ul>
                        <li>3 спортивных организаций и клубов Оренбургской области</li>
                        <li>3 действующих тренеров по фехтованию</li>
                        <li>200 фехтовальщиков в возрасте от 8 до 65 лет</li>
                    </ul>
                </div>
                <p className={styles.bigText}>Основная деятельность Федерации связана с организацией и
проведением спортивных мероприятий, обеспечением подготовки и
участия спортсменов в соревнованиях.</p>
                <p className={styles.bigText}>Федерация официально представляет интересы спортсменов,
тренеров и судей Оренбурга по виду спорта «Фехтование» во
взаимодействии с Министерством спорта РФ, Федерацией
фехтования России, Комитетом по физической культуре и спорту
Оренбургской области.</p>
            </div>
            <div className={styles.rightSide}>
                <img src="./federation/about.svg" alt="" />
                <div className={styles.overlay}></div>
            </div>
        </div>
    )
};
