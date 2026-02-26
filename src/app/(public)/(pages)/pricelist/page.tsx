import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import PriceList from "./PriceList"
import styles from './PriceList.module.css'
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