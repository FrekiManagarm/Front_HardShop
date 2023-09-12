import RAMDetailsPage from "@/container/RAMPage/RAMDetailsPage"
import { RAM } from "@/types"

async function getRAM(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/RAM/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    const data : RAM = await res.json()

    return data
}

export default async function RAMDetails({ params } : { params: { id: number } }) {

    const ram : RAM = await getRAM(params.id)

    return (
        <RAMDetailsPage ram={ram} />
    )
}