'use client'

import style from './ServicesSideBlock.module.css'
import { SERVICES } from '@/data/services.data'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PAGES } from '@/config/routes'



export default function ServicesSideBlock() {

    const path = usePathname()


    return (
        <>
            <div className={`${style.block} ${path === PAGES.SERVICES.path ? style.page : ''}`}>
                <h1 className={style.h1}>Послуги</h1>
                <div className={` ${path === PAGES.SERVICES.path ? style.blocks : ''}`}>
                    {SERVICES.map((s, index) => {
                        return <div key={index} className={style.service}>
                            <Image
                                className={style.img}
                                alt='something'
                                height={35}
                                width={35}
                                src={s.hrefImg}

                            ></Image>
                            <p className={style.text}>{s.name}</p>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}