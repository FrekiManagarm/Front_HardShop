import { Navbar } from "@/components"
import CPUPage from "@/container/CPUPage/CPUPage"
import { CPU } from "@/types"
import { notFound } from "next/navigation"

async function getCPUs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/cpu`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        cache: "no-store"
    })

    if (res.status == 404) {
        notFound()
    }

    console.log(res.json(), 'res from route handlers')

    return await res.json()
}

export default async function CPUList() {

    const cpus : CPU[] = await getCPUs()

    return (
        <>
            <CPUPage cpus={cpus} />
        </>
    )
}