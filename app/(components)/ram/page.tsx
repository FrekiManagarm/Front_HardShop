import RAMPage from "@/container/RAMPage/RAMPage"
import { RAM } from "@/types"

async function getRAMs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/ram`, {
        method: "GET",
        cache: "no-cache"
    })

    return res.json()
}

export default async function RAMList() {
    const rams : RAM[] = await getRAMs()

    return (
        <RAMPage rams={rams} />
    )
}