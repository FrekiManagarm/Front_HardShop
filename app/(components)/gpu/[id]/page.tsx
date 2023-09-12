import GPUDetailsPage from "@/container/GPUPage/GPUDetailsPage";
import { GPU } from "@/types";

async function getGPU(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/gpu/${id}`, {
        cache: "no-store",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })

    const data : GPU = await res.json()

    return data
}

export default async function GPUDetails({ params }: { params: {id: number} }) {

    const gpu : GPU = await getGPU(params.id)

    return (
        <>
            <GPUDetailsPage gpu={gpu} />
        </>
    )
}