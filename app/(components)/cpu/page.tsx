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
                <div className="flex flex-row shadow-lg p-5">
                    <Image src={cpu.image} alt="cpu image" width={150} height={150} />
                    <h3>{cpu.nom}</h3>
                </div>
            ))}
        </div>
    )
}