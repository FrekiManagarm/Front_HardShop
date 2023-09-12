import { Navbar } from "@/components";
import CoolingDetailsPage from "@/container/CoolingPage/CoolingDetailsPage";
import { Cooling } from "@/types";

async function getCooling(id: number) {
    const res = await fetch(`${process.env.API_URL}/api/Cooling/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Accept": "application/json"
        }
    })

    return res.json()
}

export default async function CoolingDetails({params}: {params: {id: number}}) {

    const cooling : Cooling = await getCooling(params.id)

    return (
        <>
            <CoolingDetailsPage cooling={cooling}  />
        </>
    )
}