import { MetaDataTypes } from "@/types/metadata.types"
import { PAGES } from '../config/routes'

export const metadata: MetaDataTypes[] = [
    {
        title: "Stoliarets.clinic",
        description: "Сімейна стоматологія",
        page: PAGES.MAIN.path
    },
    {
        title: "Про нас",
        description: "",
        page: PAGES.ABOUT.path

    }
]

