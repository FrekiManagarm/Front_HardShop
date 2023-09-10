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

    return await res.json()
}

export default async function CPUList() {

    const cpus = await getCPUs()
    console.log(cpus)

    return (
        <>
            {/* <CPUPage cpus={cpus} /> */}
        </>
    )
}