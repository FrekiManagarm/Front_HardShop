import CPUPage from "@/container/CPUPage/CPUPage"
import { CPU } from "@/types"
import { notFound } from "next/navigation"

async function getCPUs() {
    const res = await fetch(`${process.env.API_URL}/api/CPUs`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        cache: "no-store"
    })

    if (res.status == 404) {
        notFound()
    }

    const data : CPU[] = await res.json()

    return data
}

export default async function CPUList() {

    const cpus : CPU[] = await getCPUs()

    return (
        <>
            <CPUPage cpus={cpus} />
        </>
    )
}