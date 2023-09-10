import { MotherBoard } from "@/types"
import { Card } from "@/components"
import { SimpleGrid } from "@chakra-ui/react"
import MotherboardPage from "@/container/MotherboardPage/MotherboardPage"
import { notFound } from "next/navigation"

async function getMotherboards() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/motherboard`, {
        method: "GET",
        cache: "no-store",
    })

    if (res.status == 404) {
        notFound()
    }

    return await res.json()
}

export default async function MotherboardList() {

    const motherboards: MotherBoard[] = await getMotherboards()

    return (
        <MotherboardPage motherboards={motherboards} />
    )
}