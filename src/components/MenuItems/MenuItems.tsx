'use client'

import styles from './MenuItems.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import PopUpWindow from '../PopUpWindow/PopUpWindow'
import { PAGES } from '@/config/routes'



export default function MenuItems() {

    const [activeMenu, setActiveMenu] = useState<string | null>(null)


    return (
        <>
            <div className={styles.buttons}>
                <div
                    className={styles.menuItem}
                    onMouseEnter={() => setActiveMenu('Послуги')}
                    onMouseLeave={() => setActiveMenu(null)}>


                    <Link href={PAGES.SERVICES.path}>Послуги</Link>
                    <PopUpWindow type='services' activeWindow={activeMenu} isVisible={activeMenu === 'Послуги'} />

                    <div onClick={() => {
                        setActiveMenu('Послуги')

                    }} className={`${styles.arrowDown} ${activeMenu === 'Послуги' ? styles.active : ''}`}>

                    </div>

                </div>

                <div className={styles.menuItem}>
                    <Link href={PAGES.MAIN.path}>
                        <p>Ціни</p>
                    </Link>
                </div>
                <div
                    className={styles.menuItem}

                    onMouseEnter={() => setActiveMenu('Про нас')}
                    onMouseLeave={() => setActiveMenu(null)}>
                    <Link

                        href={PAGES.MAIN.path}>
                        <p>Про нас</p>

                    </Link>
                    <PopUpWindow type='about' activeWindow={activeMenu} isVisible={activeMenu === 'Про нас'} />
                    <div onClick={() => {
                        setActiveMenu('Про нас')

                    }} className={`${styles.arrowDown} ${activeMenu === 'Про нас' ? styles.active : ''}`}></div>
                </div>



                <div
                    className={styles.menuItem}
                >

                    <Link href={PAGES.MAIN.path}>
                        <p>Контакти</p>
                    </Link>
                </div>
            </div >
        </>
    )
}