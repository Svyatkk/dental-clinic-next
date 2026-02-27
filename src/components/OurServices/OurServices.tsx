import { SERVICES } from "@/data/services.data";
import styles from './OurServices.module.css'
import Link from "next/link";
import { PAGES } from "@/config/routes";


type Props = {
    currentPag?: boolean
}



export default function OurServices({ currentPag }: Props) {

    return (
        <>

            <div className={`${styles.continerGrid} ${currentPag ? styles.active : ''}`}>
                {SERVICES.map((s, index) => {
                    return (
                        <Link
                            key={index}
                            href={`${PAGES.SERVICES.path}/${s.engName}`}


                        >
                            <div


                                className={styles.service}>
                                <h2 className={styles.name}>{s.name}</h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}