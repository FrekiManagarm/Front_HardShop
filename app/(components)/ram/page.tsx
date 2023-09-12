import RAMPage from "@/container/RAMPage/RAMPage"
import { RAM } from "@/types"
import { notFound } from "next/navigation"

async function getRAMs() {
    const res = await fetch(`${process.env.API_URL}/api/RAMs`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : RAM[] = await res.json()

    return data
}

export default async function RAMList() {
    const rams : RAM[] = await getRAMs()

    return (
        <RAMPage rams={rams} />
    )
}