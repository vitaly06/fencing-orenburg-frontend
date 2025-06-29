import Document from './Document'
import styles from './ReglamentDocuments.module.css'
import first from '/federation/documents/ustav.svg'
import second from '/federation/documents/reg.svg'
import third from '/federation/documents/accred.svg'
import fourth from '/federation/documents/reglam.svg'

export default function ReglamentDocuments() {
    return (<div className={styles.documentsBlock}>
        <h1 className={styles.title}>Регламентирующие документы</h1>
        <hr className={styles.hr} />
        <p className={styles.ustav}>Устав РСОО ФФСПб, регистрационные документы, решения исполкома,
распоряжения президента федерации</p>
        <div className={styles.documents}>
            <Document img={first} title='Устав РСОО ФФСПб'/>
            <Document img={second} title='Св-во о регистрации
    Министерства юстиции РФ'/>
                <Document img={third} title='Государственная
    аккредитация'/>
                <Document img={fourth} title='Положение о деятельности
    федерации'/>
        </div>
    </div>
    )
};
