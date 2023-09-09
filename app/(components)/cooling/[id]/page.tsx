import { Navbar } from "@/components";
import CoolingDetailsPage from "@/container/CoolingPage/CoolingDetailsPage";
import { Cooling } from "@/types";

async function getCooling(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/cooling/${id}`, {
        cache: "no-cache"
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