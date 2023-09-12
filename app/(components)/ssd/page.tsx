import SSDPage from "@/container/SSDPage/SSDPage"
import { SSD } from "@/types"
import { notFound } from "next/navigation"

async function getSSDs() {
    const res = await fetch(`${process.env.API_URL}/api/SSDs`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : SSD[] = await res.json()

    return data
}

export default async function SSDList() {

    const sdds : SSD[] = await getSSDs()

    return (
        <SSDPage ssds={sdds} />
    )
}