'use client'
import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'

type Props = {
    isActive?: boolean | null
}

export default function Sidebar({ isActive }: Props) {
    return (
        <>
            <div className={`${styles.sideBar} ${isActive ? styles.active : ''}`}>


            </div>

        </>
    )
}   