'use client'

import style from './ServicesSideBlock.module.css'
import { SERVICES } from '@/data/services.data'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { PAGES } from '@/config/routes'

export default function ServicesSideBlock() {
    const path = usePathname()
    const route = useRouter()

    const mainPage = PAGES.MAIN.path
    const servicesPag = PAGES.SERVICES.path

    const isTargetPage = path === servicesPag || path === mainPage;

    return (
        <>
            <div className={`${style.block} ${isTargetPage ? style.page : ''}`}>
                <h1 className={style.h1}>Послуги</h1>

                <div className={` ${isTargetPage ? style.blocks : ''}`}>
                    {SERVICES.map((s, index) => {
                        return <div
                            onClick={() => {
                                route.push(`${PAGES.SERVICES.path}/${s.engName}`)
                            }}
                            key={index}
                            className={style.service}

                            style={isTargetPage ? {
                                backgroundImage: `url(${s.hrefImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            } : {}}
                        >
                            <Image
                                className={style.img}
                                alt={s.name}
                                height={35}
                                width={35}
                                src={s.hrefImg}
                            />
                            <p className={style.text}>{s.name}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}