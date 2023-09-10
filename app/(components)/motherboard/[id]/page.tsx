import MotherboardDetailsPage from "@/container/MotherboardPage/MotherboardDetailsPage"
import { MotherBoard } from "@/types"

async function getMotherboard(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/motherboard/${id}`, {
        method: "GET",
        cache: "no-store",
    })

    return res.json()
}

export default async function MotherboardDetails({ params }: { params: {id: number} }) {

    const motherboard : MotherBoard = await getMotherboard(params.id)

    return (
        <MotherboardDetailsPage motherboard={motherboard} />
    )
}