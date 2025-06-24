import { useEffect } from 'react';
import styles from './EmailForm.module.css';

export default function EmailForm() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A66eeca22e4d4c8375e033061c573ba0f7d90bf300ec18847b37dddb4bdaa9b2b&width=100%&height=700&lang=ru_RU&scroll=true';
        script.async = true;
        script.charset = 'utf-8';
        
        const mapContainer = document.getElementById('yandex-map');
        mapContainer.appendChild(script);
        
        return () => {
            mapContainer.removeChild(script);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.mapContainer} id="yandex-map" />
            
            <div className={styles.formOverlay}>
                <p className={styles.writeUs}>Напишите нам</p>
                <form action="">
                    <div className={styles.inputs}>
                        <input className={styles.input} type="text" placeholder='ФИО'/>
                    <input className={styles.input} type="text" placeholder='EMAIL'/>
                    <input className={styles.input} type="text" placeholder='ТЕЛЕФОН'/>
                    <textarea className={styles.textarea} name="" id="" placeholder='СООБЩЕНИЕ'></textarea>
                    </div>
                        <div className={styles.checkBlock}>
                            <input className={styles.check} type="checkbox" name="agree" id="" />
                        <label className={styles.checkLabel} htmlFor="agree">Я СОГЛАСЕН, ЧТО ПРИВЕДЕННЫЕ МНОЮ ДАННЫЕ БУДУТ ХРАНИТЬСЯ И ОБРАБАТЫВАТЬСЯ ФФОО</label>
                    </div>
                    <button className={styles.sendButton} type="submit">ОТПРАВИТЬ!</button>
                </form>
            </div>
        </div>
    )
}