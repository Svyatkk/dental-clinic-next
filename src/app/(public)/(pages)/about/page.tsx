
import { generateMetadata as generateMetadataService } from "@/services/generateMetadata.services"
import { PAGES } from "@/config/routes"
import About from "./About"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
export function generateMetadata() {
    return generateMetadataService(PAGES.ABOUT.path)
}

export default function ABoutPage() {

    return (
        <>

            <About></About>
        </>
    )
}