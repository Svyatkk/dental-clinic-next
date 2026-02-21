'use client'
import style from './RecordButton.module.css'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
export default function RecordButton() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <button onClick={() => {
                setOpen(prev => !prev)
            }} className={style.button}>Записатися</button>

        </>
    )
}