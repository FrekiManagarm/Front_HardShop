import { Navbar } from "@/components"
import CPUPage from "@/container/CPUPage/CPUPage"
import { CPU } from "@/types"

async function getCPUs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/cpu`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        cache: "no-store"
    })

    return res.json()
}

export default async function CPUList() {

    const cpus : CPU[] = await getCPUs()

    return (
        <>
            <CPUPage cpus={cpus} />
        </>
    )
}