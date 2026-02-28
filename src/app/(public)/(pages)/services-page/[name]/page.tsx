import { SERVICES } from "@/data/services.data"
import { notFound } from "next/navigation"
import { PAGES } from "@/config/routes"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import styles from '../services.module.css'
import PriceList from "../../pricelist/PriceList"


export async function generateStaticParams() {
    return SERVICES
        .filter(service => service.engName !== 'Service')
        .map((service) => ({
            name: service.engName,
        }))
}


type Props = {
    params: Promise<{ name: string }>
}

export default async function ServicePage({ params }: Props) {
    const { name } = await params

    const found = SERVICES.find(s => s.engName === name)

    if (!found) {
        return notFound()
    }
    return (
        <>


            <div className={styles.container}>
                <Breadcrumbs page={PAGES.SERVICES.name} childName={found.name}></Breadcrumbs>
                <div style={{ padding: '20px' }}>
                    <h1>{found.name}</h1>

                    <p>Ціна: {found.price} грн</p>

                    <PriceList whatToSee={found.engName}></PriceList>


                </div>


            </div>

        </>

    )
}