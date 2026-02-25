
import { SERVICES } from "@/data/services.data";
import styles from './OurServices.module.css'




export default function OurServices() {

    return (
        <>
            <div className={styles.continerGrid}>
                {SERVICES.map((s, index) => {
                    return <div key={index} className={styles.service}>
                        <h2 className={styles.name}>{s.name}</h2>
                    </div>
                })}


            </div>
        </>
    )
}