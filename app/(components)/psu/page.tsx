import PSUPage from "@/container/PSUPage/PSUPage"
import { PSU } from "@/types"
import { notFound } from "next/navigation"

async function getPSUs() {
    const res = await fetch(`${process.env.API_URL}/api/PSUs`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : PSU[] = await res.json()

    return data
}

export default async function PSUList() {

    const psus : PSU[] = await getPSUs()

    return (
        <PSUPage psus={psus} />
    )
}