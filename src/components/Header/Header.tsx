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

    const [activeMenu, setActiveMenu] = useState<string | null>(null)



    const [open, setOpen] = useState(false)


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
                    <PopUpWindow activeWindow="Послуга" isVisible={activeMenu === 'Послуга'} />
                </div>

                <div
                    className={styles.menuItem}
                    onMouseEnter={() => setActiveMenu('Інше')}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <Link href={PAGES.MAIN}>
                        <p>Ціни</p>
                    </Link>
                    <PopUpWindow activeWindow="Інше" isVisible={activeMenu === 'Інше'} />
                </div>
                <div
                    className={styles.menuItem}
                    onMouseEnter={() => setActiveMenu('Інше')}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <Link href={PAGES.MAIN}>
                        <p>Про нас</p>
                    </Link>
                    <PopUpWindow activeWindow="Інше" isVisible={activeMenu === 'Інше'} />
                </div>  <div
                    className={styles.menuItem}
                    onMouseEnter={() => setActiveMenu('Інше')}
                    onMouseLeave={() => setActiveMenu(null)}

                >

                    <Link href={PAGES.MAIN}>
                        <p>Контакти</p>
                    </Link>
                    <PopUpWindow activeWindow="Інше" isVisible={activeMenu === 'Інше'} />
                </div>
            </div>

            <button onClick={toggleSidebar} className={styles.buttonOpenSideBar}>open</button>

            <RecordButton />
        </nav>
    )
}