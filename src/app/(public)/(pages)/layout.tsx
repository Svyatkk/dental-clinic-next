import Header from '@/components/Header/Header'
import styles from './layout.module.css'
import { PAGES } from '@/config/routes'
import ServicesSideBlock from '@/components/ServicesSideBlock/ServicesSideBlock'
type Props = {
    children: React.ReactNode
}


export default function LayoutPages({ children }: Props) {
    return (
        <>

            <div className={styles.container}>


                <div className={styles.block}>
                    {children}

                    <ServicesSideBlock></ServicesSideBlock>
                </div>



            </div>

        </>

    )
}