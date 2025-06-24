import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.contacts}>
                <div className={styles.contactElem}>
                    <img src={'./header/phone.svg'} alt="" />
                    <p className={styles.contactName}>+7 (922) 814-30-38</p>
                </div>
                <div className={styles.contactElem}>
                    <img src={'./header/mail.svg'} alt="" />
                    <p className={styles.contactName}>tgflk_fencing@mail.ru</p>
                </div>
            </div>
        </div>
    )
};
