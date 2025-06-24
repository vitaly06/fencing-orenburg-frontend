import styles from './BigFooter.module.css'

export default function BigFooter() {
    return (
        <div className={styles.bigFooter}>
        <div className={styles.footer}>
            <div className={styles.firstColumn}>
                <div className={styles.logoBlock}>
                    <img src="./second_header/logo.svg" alt="" />
                    <p>Федерация фехтования<br/>оренбургской области</p>
                </div>
                <p className={styles.descriptionFfo}>Федерация фехтования Оренбургской области занимается развитием и популяризацией фехтования в Степной столице, организацией и
                    проведением спортивных
                    мероприятий, обеспечением участия
                    спортсменов в российских и
                    международных соревнованиях.</p>
            </div>
        <div className={styles.secondColumn}>
            <p className={styles.footerTitle}>Оплата услуг ФФОО</p>
                <li className={styles.liElem}>Услуги и формы договоров</li>
                <li className={styles.liElem}>Оферта при онлайн оплате</li>
                <li className={styles.liElem}>Правила оплаты и безопасность</li>
                <li className={styles.liElem}>Политика конфиденциальности</li>
                <li className={styles.liElem}>Возврат денежных средств</li>
            <img src="./pay.svg" alt="" />
        </div>
        <div className={styles.thirdColumn}>
            <p className={styles.footerTitle}>Офис ФФОО</p>
            <div className={styles.contact}>
                <p className={styles.contactName}>Адрес</p>
                <p className={styles.contactInfo}>С 11 мая 2022 года офис Федерации
                фехтования Оренбургской области
                работает по новому адресу: Советская 23/1.
                </p>
                </div>
            <div className={styles.contact}>
                <p className={styles.contactName}>Телефон</p>
                <p className={styles.contactInfo}>+7 (922) 814-30-38</p>
            </div>
            <div className={styles.contact}>
                <p className={styles.contactName}>Почта</p>
                <p className={styles.contactInfo}>tgflk_fencing@mail.ru</p>
            </div>
        </div>
        <div className={styles.fourthColumn}>
            <p className={styles.footerTitle}>Режим работы офиса</p>
            <div className={styles.contact}>
                <p className={styles.contactName}>Понедельник, вторник, среда, четверг, пятница</p>
                <p className={styles.contactInfo}>10.00-16.30</p>
            </div>
        </div>
        </div>
        </div>
    )
};
