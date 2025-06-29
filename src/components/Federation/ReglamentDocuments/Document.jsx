import styles from './Document.module.css'

export default function Document(props) {
    const {img, title} = {...props}

    return (
        <div className={styles.document}>
            <img src={img} alt="" />
            <div className={styles.overlay}>
                <p>{title}</p>
            </div>
        </div>
    )
};
