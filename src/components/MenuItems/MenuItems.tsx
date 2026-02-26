'use client'

import styles from './MenuItems.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import PopUpWindow from '../PopUpWindow/PopUpWindow'
import { PAGES } from '@/config/routes'



export default function MenuItems() {

    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 1220)
        check()

        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    return (
        <>
            <div className={styles.buttons}>
                <div

                    onClick={(e) => {
                        e.stopPropagation()
                        if (isMobile) {
                            setActiveMenu(prev => prev === 'Послуги' ? null : 'Послуги')
                        }
                    }}
                    className={styles.menuItem}
                    onMouseEnter={() => !isMobile && setActiveMenu('Послуги')}
                    onMouseLeave={() => !isMobile && setActiveMenu(null)}>




                    <Link href={PAGES.SERVICES.path}>Послуги</Link>
                    <PopUpWindow type='services' activeWindow={activeMenu} isVisible={activeMenu === 'Послуги'} />

                    <div className={`${styles.arrowDown} ${activeMenu === 'Послуги' ? styles.active : ''}`}>

                    </div>

                </div>

                <div className={styles.menuItem}>
                    <Link href={PAGES.MAIN.path}>
                        <p>Ціни</p>
                    </Link>
                </div>
                <div

                    onClick={(e) => {
                        e.stopPropagation()
                        if (isMobile) {
                            setActiveMenu(prev => prev === 'Про нас' ? null : 'Про нас')
                        }
                    }}
                    className={styles.menuItem}

                    onMouseEnter={() => !isMobile && setActiveMenu('Про нас')}
                    onMouseLeave={() => !isMobile && setActiveMenu(null)}>
                    <Link



                        href={PAGES.MAIN.path}>
                        <p>Про нас</p>

                    </Link>
                    <PopUpWindow type='about' activeWindow={activeMenu} isVisible={activeMenu === 'Про нас'} />

                    <div className={`${styles.arrowDown} ${activeMenu === 'Про нас' ? styles.active : ''}`}>

                    </div>
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