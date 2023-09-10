import SSDDetailsPage from "@/container/SSDPage/SSDDetailsPage";
import { SSD } from "@/types";

async function getSSD(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/ssd/${id}`, {
        method: "GET",
        cache: "no-store"
    })

    return res.json()
}

export default async function SSDDetails({ params }: {params: {id: number}}) {

    const ssd : SSD = await getSSD(params.id)

  return (
    <SSDDetailsPage ssd={ssd} />
  )
}
