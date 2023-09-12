import MotherboardDetailsPage from "@/container/MotherboardPage/MotherboardDetailsPage"
import { MotherBoard } from "@/types"
import { notFound } from "next/navigation"

async function getMotherboard(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/MotherBoard/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : MotherBoard = await res.json()

    return data
}

export default async function MotherboardDetails({ params }: { params: {id: number} }) {

    const motherboard : MotherBoard = await getMotherboard(params.id)

    return (
        <MotherboardDetailsPage motherboard={motherboard} />
    )
}