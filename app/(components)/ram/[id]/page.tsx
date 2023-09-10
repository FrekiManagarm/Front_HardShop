import RAMDetailsPage from "@/container/RAMPage/RAMDetailsPage"
import { RAM } from "@/types"

async function getRAM(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/ram/${id}`, {
        method: "GET",
        cache: "no-store",
    })

    return res.json()
}

export default async function RAMDetails({ params } : { params: { id: number } }) {

    const ram : RAM = await getRAM(params.id)

    return (
        <RAMDetailsPage ram={ram} />
    )
}