import Card from "@/components/Card/Card"
import { CPU } from "@/types"
import Image from "next/image"

async function getCPUs() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/cpu`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

export default async function CPUList() {

    const cpus : CPU[] = await getCPUs()

    return (
        <div className="w-full text-center">
            <h1 className="text-[32px]">CPUList</h1>
            {cpus.map((cpu) => (
                <Card key={cpu.id} name={cpu.nom} description={cpu.description} image={cpu.image} link={`/cpu/${cpu.id}`} />
            ))}
        </div>
    )
}