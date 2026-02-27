'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header/Header'
import styles from './layout.module.css'
import { PAGES } from '@/config/routes'
import ServicesSideBlock from '@/components/ServicesSideBlock/ServicesSideBlock'
type Props = {
    children: React.ReactNode
}


export default function LayoutPages({ children }: Props) {
    const path = usePathname()


    return (
        <>

            <div className={styles.container}>
                <div className={`${styles.block} ${path === PAGES.SERVICES.path ? styles.sPage : ''}`}>
                    {children}



                    <ServicesSideBlock></ServicesSideBlock>
                </div>
            </div>

        </>

    )
}