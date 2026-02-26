'use client'

import { useState } from 'react'
import style from './PopUpWindow.module.css'
import { SERVICES } from "@/data/services.data"
import { ServicesType } from '@/types/services.types'
import { AboutUsData } from '@/data/aboutUs.data'

type MenuType = 'services' | 'about'
type Props = {
    activeWindow: string | null
    isVisible: boolean
    type: MenuType
}


export default function PopUpWindow({ isVisible, type }: Props) {

    if (type === 'services') {
        const list = SERVICES.slice(1)
        return (
            <>
                <div className={`${style.block} ${isVisible ? style.visible : ''}`}>

                    {list.map((service, index) => (
                        <div className={style.element} key={index}>
                            {service.name}
                        </div>
                    ))}
                </div>
            </>
        )
    }




    if (type === 'about') {
        const list = AboutUsData

        return (
            <>
                <div className={`${style.block} ${isVisible ? style.visible : ''}`}>

                    {list.map((item, index) => (
                        <div className={style.element} key={index}>
                            {item.title}
                        </div>
                    ))}
                </div>
            </>

        )
    }

    return null
}