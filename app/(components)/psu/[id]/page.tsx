import PSUDetailsPage from "@/container/PSUPage/PSUDetailsPage"
import { PSU } from "@/types"

async function getPSU(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/psu/${id}`, {
        method: "GET",
        cache: "no-cache"
    })

    return res.json()
} 

export default async function PSUDetails({ params }: {params: { id: number }}) {

    const psu : PSU = await getPSU(params.id)

    return (
        <PSUDetailsPage psu={psu} />
    )
}