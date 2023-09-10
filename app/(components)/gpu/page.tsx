import { Navbar } from "@/components";
import CPUPage from "@/container/CPUPage/CPUPage";
import GPUPage from "@/container/GPUPage/GPUPage";
import { GPU } from "@/types";

async function getGPUs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/gpu`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        next: {
            revalidate: 0
        }
    })

    return await res.json()
}

export default async function GPUList() {

    const gpus: GPU[] = await getGPUs()

    return (
        <>
            <GPUPage gpus={gpus} />
        </>
    )
}