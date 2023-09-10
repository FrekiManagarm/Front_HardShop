import SSDPage from "@/container/SSDPage/SSDPage"
import { SSD } from "@/types"

async function getSSDs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/ram`, {
        method: "GET",
        cache: ""
    })

    return res.json()
}

export default async function SSDList() {

    const sdds : SSD[] = await getSSDs()

    return (
        <SSDPage ssds={sdds} />
    )
}