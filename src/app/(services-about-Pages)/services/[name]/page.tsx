'use client'

import { useParams } from "next/navigation"
import { SERVICES } from "@/data/services.data"


type Props = {
    params: Promise<{ name: string }>
}

export default async function Service({ params }: Props) {
    const { name } = await params

    const decodedName = decodeURIComponent(name)

    const found = SERVICES.find(s => s.name === decodedName)



    return (
        <>



            <div>
                {found?.name}
            </div>

        </>
    )
}