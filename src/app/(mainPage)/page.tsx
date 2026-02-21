import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>

        <div className={styles.blockAdress}>
          <div className={styles.textBlock}>
            <h1>Комплексні стоматологічні послуги</h1>
            <p>Допоможемо засяяти усмішкою мрії</p>
          </div>

          <div className={styles.adress}>
            <span>Київ, вул. Йорданська, 17 (м. Оболонь)</span>

            <Link href="/">098 881 93 58</Link>
            <Link href="/">Дивитись на мапі</Link>
          </div>
        </div>


        <div className={styles.blockImages}>
          <div className={styles.grayCircle}>
            <div className={styles.whiteCircle}></div>
          </div>
        </div>

      </div>
    </div>
  );
}