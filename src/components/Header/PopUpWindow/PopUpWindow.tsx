'use client'

import style from './PopUpWindow.module.css'
import { SERVICES } from "@/data/services.data"

type Props = {
    activeWindow: string
}

export default function PopUpWindow({ activeWindow }: Props) {

    const service = SERVICES.find(s => s.name === activeWindow)


    if (!service) return null

    return (
        <div className={style.block}>
            <h1>{service.name}</h1>
            <p>{service.price} грн</p>
        </div>
    )
}