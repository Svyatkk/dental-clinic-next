
import { SERVICES } from "@/data/services.data";
import styles from './OurServices.module.css'


type Props = {
    currentPag?: boolean
}



export default function OurServices({ currentPag }: Props) {

    return (
        <>


            <div className={`${styles.continerGrid} ${currentPag ? styles.active : ''}`}>
                {SERVICES.map((s, index) => {
                    return <div key={index} className={styles.service}>
                        <h2 className={styles.name}>{s.name}</h2>
                    </div>
                })}


            </div>
        </>
    )
}