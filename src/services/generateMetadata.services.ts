import { metadata } from "@/data/metadata.data"
import { Metadata } from "next"


export function generateMetadata(data: string): Metadata {
    const pagemeta = metadata.find((p) => p.page === data)
    return {
        title: pagemeta?.title,
        description: pagemeta?.description
    }
}
