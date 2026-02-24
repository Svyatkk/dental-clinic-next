'use client'

import styles from './services.module.css'
import { SERVICES } from "@/data/services.data"
import Link from "next/link"
import { PAGES } from '@/config/routes'

export default function ServicesList() {
    return (
        <>
            {
                SERVICES.map((s, index) => {

                    return <div className={styles.block} key={index}>
                        <Link href={`${PAGES.SERVICES}/${s.engName}`}><h1>{s.name}</h1></Link>
                        <h1>{s.price}</h1>

                    </div>
                })


            }


        </>
    )
}