import Header from '@/components/Header/Header'
import styles from './layout.module.css'

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