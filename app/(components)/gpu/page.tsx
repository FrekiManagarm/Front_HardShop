import { Navbar } from "@/components";
import CPUPage from "@/container/CPUPage/CPUPage";
import GPUPage from "@/container/GPUPage/GPUPage";
import { GPU } from "@/types";
import { notFound } from "next/navigation";

async function getGPUs() {
    const res = await fetch(`${process.env.API_URL}/api/GPUs`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        cache: "no-store"
    })

    if (res.status == 404) {
        notFound()
    }

    const data : GPU[] = await res.json()

    return data
}

export default async function GPUList() {

    const gpus: GPU[] = await getGPUs()

    return (
        <>
            <GPUPage gpus={gpus} />
        </>
    )
}