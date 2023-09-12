import PSUDetailsPage from "@/container/PSUPage/PSUDetailsPage"
import { PSU } from "@/types"

async function getPSU(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/PSU/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    const data : PSU = await res.json()

    return data
} 

export default async function PSUDetails({ params }: {params: { id: number }}) {

    const psu : PSU = await getPSU(params.id)

    return (
        <PSUDetailsPage psu={psu} />
    )
}