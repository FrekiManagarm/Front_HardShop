import { MotherBoard } from "@/types"
import { Card } from "@/components"
import { SimpleGrid } from "@chakra-ui/react"
import MotherboardPage from "@/container/MotherboardPage/MotherboardPage"
import { notFound } from "next/navigation"

async function getMotherboards() {
    const res = await fetch(`${process.env.API_URL}/api/MotherBoards`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : MotherBoard[] = await res.json()

    return data
}

export default async function MotherboardList() {

    const motherboards: MotherBoard[] = await getMotherboards()

    return (
        <MotherboardPage motherboards={motherboards} />
    )
}