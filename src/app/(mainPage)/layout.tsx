import styles from './page.module.css'
import BlockRecomendation from '@/components/BlockRecomendation/BlockRecomendation'
import OurServices from '@/components/OurServices/OurServices'

type Props = {
    children: React.ReactNode
}


export default function Main({ children }: Props) {
    return (
        <>
            <div className={styles.sublayoutMain}>
                <div className={styles.layoutMain}>
                    {children}
                </div>


            </div>
            <div className={styles.content}>
                <BlockRecomendation></BlockRecomendation>
                <OurServices></OurServices>
            </div>

        </>

    )
}