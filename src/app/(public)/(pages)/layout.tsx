import Header from '@/components/Header/Header'
import styles from './layout.module.css'
import { PAGES } from '@/config/routes'
type Props = {
    children: React.ReactNode
}


export default function LayoutPages({ children }: Props) {
    return (
        <>

            <div className={styles.container}>


                {children}


            </div>

        </>

    )
}