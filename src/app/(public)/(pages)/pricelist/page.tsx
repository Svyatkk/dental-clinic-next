import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import PriceList from "./PriceList"
import styles from './PriceList.module.css'
import { PAGES } from '@/config/routes'
import { generateMetadata as generateMetadataService } from "@/services/generateMetadata.services"
export function generateMetadata() {
    return generateMetadataService(PAGES.PRICE_LIST.path)
}

export default function page() {
    return (
        <>
            <div className={styles.blockPage}>
                <Breadcrumbs page="Ціни"></Breadcrumbs>
                <PriceList></PriceList>
            </div>
        </>
    )
}

