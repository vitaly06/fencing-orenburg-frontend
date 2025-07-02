import styles from './CoachCard.module.css'

export default function CoachCard(params) {
    const {img, name, description} = {...params}
    return (
        <div className={styles.card}>
            <img src={img} alt="" />
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
};
