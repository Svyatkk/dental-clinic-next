'use client'
import styles from "./page.module.css";
import Link from "next/link";


export default function Main() {

    return (
        <>

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

                    <div className={styles.blockDesc}>
                        Ми раді вітати вас у нашій стоматологічній клініці Sigma Dent, де ми піклуємося про ваше здоров’я та усмішку з найкращими спеціалістами і сучасними технологіями! Наша команда професіоналів працює над тим, щоб кожен візит був комфортним, а лікування ефективним і безболісним.


                    </div>
                </div>



            </div>





        </>
    );
}