import SSDPage from "@/container/SSDPage/SSDPage"
import { SSD } from "@/types"
import { notFound } from "next/navigation"

async function getSSDs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/ram`, {
        method: "GET",
        cache: "no-store"
    })

    if (res.status == 404) {
        notFound()
    }

    return await res.json()
}

export default async function SSDList() {

    const sdds : SSD[] = await getSSDs()

    return (
        <SSDPage ssds={sdds} />
    )
}