import styles from './NewsSlider.module.css';

export default function NewsSlider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {/* Левая часть - большое изображение */}
        <div className={styles.leftSide}>
          <div className={styles.mainImageContainer}>
            <img 
              src="/news_slider/1.jpg" 
              alt="Main news" 
              className={styles.mainImage}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageTag}>летние фехтовальные сборы</span>
              <div className={styles.imageCaption}>
                <p>Заголовок главной новости</p>
                <span className={styles.imageDate}>12 мая 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть - 4 маленьких изображения */}
        <div className={styles.rightSide}>
          {[2, 3, 4, 5].map((item) => (
            <div key={item} className={styles.smallImageContainer}>
              <img 
                src={`/news_slider/${item}.jpg`} 
                alt={`News ${item}`} 
                className={styles.smallImage}
              />
              <div className={styles.smallImageOverlay}>
                <span className={styles.smallImageTag}>Новости</span>
                <div className={styles.smallImageCaption}>
                  <p>Заголовок новости {item}</p>
                  <span className={styles.smallImageDate}>12 мая 2023</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}