import { Navbar } from "@/components";
import GPUDetailsPage from "@/container/GPUPage/GPUDetailsPage";
import { GPU } from "@/types";

async function getGPU(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/gpu/${id}`, {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

export default async function GPUDetails({ params }: { params: {id: number} }) {

    const gpu : GPU = await getGPU(params.id)

    return (
        <>
            <GPUDetailsPage gpu={gpu} />
        </>
    )
}