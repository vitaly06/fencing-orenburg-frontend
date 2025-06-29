import { NavLink } from 'react-router-dom';
import styles from './SecondHeader.module.css';

export default function SecondHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.sides}>
                <div className={styles.leftSide}>
                    <img src="./second_header/logo.svg" alt="" />
                    <p className={styles.logoText}>Федерация фехтования<br />оренбургской области</p>
                </div>
                <div className={styles.rightSide}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? `${styles.headerButton} ${styles.active}` : styles.headerButton
                        }
                    >
                        главная
                    </NavLink>
                    <NavLink 
                        to="/federation" 
                        className={({ isActive }) => 
                            isActive ? `${styles.headerButton} ${styles.active}` : styles.headerButton
                        }
                    >
                        Федерация
                    </NavLink>
                    <NavLink 
                        to="/competitions" 
                        className={({ isActive }) => 
                            isActive ? `${styles.headerButton} ${styles.active}` : styles.headerButton
                        }
                    >
                        Соревнования
                    </NavLink>
                    <NavLink 
                        to="/team" 
                        className={({ isActive }) => 
                            isActive ? `${styles.headerButton} ${styles.active}` : styles.headerButton
                        }
                    >
                        Сборная ОРБ
                    </NavLink>
                    <NavLink 
                        to="/club" 
                        className={({ isActive }) => 
                            isActive ? `${styles.headerButton} ${styles.active}` : styles.headerButton
                        }
                    >
                        Клуб
                    </NavLink>
                </div>
            </div>
        </div>
    );
}