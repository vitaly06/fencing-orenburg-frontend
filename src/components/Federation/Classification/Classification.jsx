import styles from './Classification.module.css'
import first from '/federation/documents/ustav.svg'
import second from '/federation/documents/reg.svg'
import Document from '../ReglamentDocuments/Document'

export default function Classification() {
    return (
    <div className={styles.documentsBlock}>
                <h1 className={styles.title}>Единая всероссийская спортивная классификация (ЕВСК)</h1>
                <hr className={styles.hr} />
                <p className={styles.ustav}>Положение о ЕВСК, о присвоении разрядов и званий в соответствии с требованиями и условиями их выполнения по виду спорта «Фехтование».</p>
                <div className={styles.documents}>
                    <Document img={first} title='Устав РСОО ФФСПб'/>
                    <Document img={second} title='Св-во о регистрации
            Министерства юстиции РФ'/>
                </div>
            </div>
    )
};
