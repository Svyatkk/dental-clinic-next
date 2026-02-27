'use client'
import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import MenuItems from '../MenuItems/MenuItems'
type Props = {
    isActive?: boolean | null,
    close: () => void

}

export default function Sidebar({ isActive, close }: Props) {
    return (
        <>
            <div className={`${styles.sideBar} ${isActive ? styles.active : ''}`}>
                <MenuItems></MenuItems>
            </div>

        </>
    )
}   