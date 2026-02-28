'use client'

import { useEffect, useState } from 'react'
import styles from './PriceList.module.css'
import { SERVICES } from '@/data/services.data'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { ServiceType } from '@/types/service.type'

type Props = {
    whatToSee?: string
}


export default function PriceList({ whatToSee }: Props) {
    const [chosed, setChosed] = useState('')
    const [current, setCurrent] = useState<ServiceType[]>([])



    const target = SERVICES.find(s => s.engName === whatToSee)

    useEffect(() => {
        if (whatToSee && target) {
            setChosed(target.name)
        }
    }, [whatToSee, target])

    useEffect(() => {
        const find = SERVICES.find(s => s.name === chosed)
        return setCurrent(find?.more || [])
    }, [chosed])

    return (
        <>

            <h1>Ціни</h1>
            <div className={styles.container}>

                {whatToSee && target ? (
                    <div
                        key={target.name}
                        className={`${styles.block} ${target.name === chosed ? styles.active : ''}`}>
                        <h2 className={styles.name}>{target.name}</h2>
                        <div className={`${styles.list} ${target ? styles.activeLIst : ""}`}>
                            {current.map((item, index) => (
                                <div className={styles.element} key={index}>
                                    <div className={styles.nameService}>{item.name}</div>
                                    <div className={styles.price}>{item.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    SERVICES.map((s, index) => (
                        <div
                            onClick={() => setChosed(s.name)}
                            key={index}
                            className={`${styles.block} ${s.name === chosed ? styles.active : ''}`}>
                            <h2 className={styles.name}>{s.name}</h2>
                            <div className={styles.list}>
                                {current.map((item, index) => (
                                    <div className={styles.element} key={index}>
                                        <div className={styles.nameService}>{item.name}</div>
                                        <div className={styles.price}>{item.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}


            </div >
        </>
    )
}