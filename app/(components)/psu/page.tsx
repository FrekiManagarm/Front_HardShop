import PSUPage from "@/container/PSUPage/PSUPage"
import { PSU } from "@/types"
import { notFound } from "next/navigation"

async function getPSUs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/psu`, {
        method: "GET",
        cache: "no-store"
    })

    if (res.status == 404) {
        notFound()
    }

    return await res.json()
}

export default async function PSUList() {

    const psus : PSU[] = await getPSUs()

    return (
        <PSUPage psus={psus} />
    )
}