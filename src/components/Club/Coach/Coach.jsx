import CoachCard from '../CoachCard'
import styles from './Coach.module.css'
import damir from '/coachs/damir.svg'
import vlad from '/coachs/vlad.svg'

export default function Coach() {
    return (
        <div className={styles.coachs}>
            <h1 className={styles.title}>Квалифицированные тренера</h1>
            <hr className={styles.hr}/>
            <div className={styles.cards}>
                <CoachCard img ={damir} name='Лукманов Дамир Фанилович' description='Главный тренер Федерации Фехтования Оренбургской области'/>
                <CoachCard img ={vlad} name='Прошенков Владислав Николаевич' description='Старший тренер Федерации Фехтования Оренбургской области'/>
            </div>
        </div>
    )
};
