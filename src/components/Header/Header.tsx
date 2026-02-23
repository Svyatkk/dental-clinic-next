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
import MenuItems from '../MenuItems/MenuItems'

type Props = {
    toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: Props) {

    const [isActive, setIsActive] = useState(false)
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
            <MenuItems></MenuItems>

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