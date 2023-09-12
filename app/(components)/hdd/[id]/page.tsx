import HDDDetailsPage from "@/container/HDDPage/HDDDetailsPage";
import { HDD } from "@/types";

async function getHDD(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/HDD/${id}`, {
        cache: "no-store",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })

    const data : HDD = await res.json()

    return data
}

export default async function HDDDetails({ params }: {params: {id: number}}) {

    const hdd : HDD = await getHDD(params.id)

    return (
        <>
            <HDDDetailsPage hdd={hdd} />
        </>
    )
}