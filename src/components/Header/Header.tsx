'use client'

import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { PAGES } from '../../config/routes'
import RecordButton from '../RecordButton/RecordButton'
import { useEffect, useState } from 'react'
import PopUpWindow from '../PopUpWindow/PopUpWindow'
import { ServicesType } from '@/types/services.types'
import Sidebar from '../Sidebar/Sidebar'

type Props = {
    toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: Props) {
    const [isActive, setIsActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    const [open, setOpen] = useState(false)

    const handleBurger = () => {
        toggleSidebar()
        setIsActive(!isActive)
    }

    return (
        <nav className={styles.nav}>
            <Image
                className={styles.img}
                height={60}
                width={20}
                src="/logo.png"
                alt="alt"
                priority
            />

            <div className={styles.buttons}>

                <div
                    className={styles.menuItem}
                    onMouseEnter={() => setActiveMenu('Послуга')}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <Link href={PAGES.MAIN}>Послуга</Link>
                    <PopUpWindow type='services' activeWindow={activeMenu} isVisible={activeMenu === 'Послуга'} />
                </div>


                <div className={styles.menuItem}>
                    <Link href={PAGES.MAIN}>
                        <p>Ціни</p>
                    </Link>
                </div>
                <div
                    className={styles.menuItem}

                    onMouseEnter={() => setActiveMenu('Про нас')}
                    onMouseLeave={() => setActiveMenu(null)}>
                    <Link

                        href={PAGES.MAIN}>
                        <p>Про нас</p>

                    </Link>
                    <PopUpWindow type='about' activeWindow={activeMenu} isVisible={activeMenu === 'Про нас'} />

                </div>

                <div
                    className={styles.menuItem}
                >

                    <Link href={PAGES.MAIN}>
                        <p>Контакти</p>
                    </Link>
                </div>
            </div>

            <button
                className={`${styles.burger} ${isActive ? styles.open : ''}`}
                onClick={handleBurger}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <RecordButton />
        </nav>
    )
}