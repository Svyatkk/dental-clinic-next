'use client'

import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from '../../config/routes'
import RecordButton from '../RecordButton/RecordButton';
import { act, useEffect, useState } from 'react';
import { SERVICES } from '@/data/services.data';
import PopUpWindow from './PopUpWindow/PopUpWindow';
export default function Header() {

    const [activeMenu, setActiveMenu] = useState<string | null>(null)

    return (
        <>
            <nav className={styles.nav}>
                <Image
                    className={styles.img}
                    height={60}
                    width={20}
                    src="/logo.png"
                    alt='alt'
                    priority
                ></Image>

                <div className={styles.buttons}>
                    <Link href={PAGES.MAIN}>
                        <p
                            onMouseEnter={() => setActiveMenu("Послуга")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            Service

                        </p>
                        {activeMenu && <PopUpWindow activeWindow={activeMenu} />}

                    </Link>

                </div>

                <div className={styles.buttons}>
                    <Link href={PAGES.MAIN}>
                        <p
                            onMouseEnter={() => setActiveMenu("Інше")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >

                            Service
                        </p>
                        {activeMenu && <PopUpWindow activeWindow={activeMenu} />}

                    </Link>

                </div>

                <RecordButton></RecordButton>
            </nav >
        </>
    )
}