import { SERVICES } from "@/data/services.data"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ name: string }>
}

export default async function ServicePage({ params }: Props) {
    const { name } = await params

    const decodedName = decodeURIComponent(name)

    const found = SERVICES.find(s => s.name === decodedName)

    if (!found) {
        return notFound()
    }


    return (
        <div style={{ padding: '20px' }}>
            <h1>{found.name}</h1>
            <p>Ціна: {found.price} грн</p>
        </div>
    )
}