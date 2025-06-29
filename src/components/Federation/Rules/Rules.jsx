import Document from '../ReglamentDocuments/Document'
import styles from './Rules.module.css'
import first from '/federation/documents/ustav.svg'
import second from '/federation/documents/reg.svg'
import third from '/federation/documents/accred.svg'

export default function Rules() {
    return (<div className={styles.documentsBlock}>
            <h1 className={styles.title}>Правила фехтования</h1>
            <hr className={styles.hr} />
            <p className={styles.ustav}>Правила вида спорта «Фехтование», правила проведения соревнований, дополнения к правилам фехтования.</p>
            <div className={styles.documents}>
                <Document img={first} title='Устав РСОО ФФСПб'/>
                <Document img={second} title='Св-во о регистрации
        Министерства юстиции РФ'/>
                    <Document img={third} title='Государственная
        аккредитация'/>
            </div>
        </div>
        )
};
