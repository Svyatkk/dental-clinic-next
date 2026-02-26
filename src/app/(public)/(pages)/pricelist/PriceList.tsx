'use client'

import { useEffect, useState } from 'react'
import styles from './PriceList.module.css'
import { SERVICES } from '@/data/services.data'

import { ServiceType } from '@/types/service.type'
export default function PriceList() {

    const [chosed, setChosed] = useState('')

    const [current, setCurrent] = useState<ServiceType[]>([])

    useEffect(() => {
        const find = SERVICES.find(s => s.name === chosed)
        return setCurrent(find?.more || [])


    }, [chosed])


    return (
        <>
            <div className={styles.container}>

                {
                    SERVICES.map((s, index) => {
                        return <div

                            onClick={() => {
                                setChosed(s.name)
                            }}


                            key={index} className={`${styles.block} ${s.name === chosed ? styles.active : ''}`}>
                            <h2 className={styles.name}>{s.name}</h2>

                            <div className={styles.list}>
                                {current.map((item, index) => (
                                    <div key={index}>
                                        {item.name} - {item.price}
                                    </div>
                                ))}
                            </div>
                        </div>
                    })
                }


            </div>
        </>
    )
}