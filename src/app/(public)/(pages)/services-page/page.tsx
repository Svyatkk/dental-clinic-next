import ServicesList from "./ServiceList"
import { SERVICES } from "@/data/services.data"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"

export default function ServicesPage() {
    return (
        <>

            <Breadcrumbs page={"Послуги"}></Breadcrumbs>
            <ServicesList></ServicesList>





        </>
    )
}