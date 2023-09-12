import SSDDetailsPage from "@/container/SSDPage/SSDDetailsPage";
import { SSD } from "@/types";
import { notFound } from "next/navigation";

async function getSSD(id: number) {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/SSD/${id}`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Accept": "application/json"
        }
    })

    if (res.status == 404) {
      notFound()
    }

    const data : SSD = await res.json()

    return data
}

export default async function SSDDetails({ params }: {params: {id: number}}) {

    const ssd : SSD = await getSSD(params.id)

  return (
    <SSDDetailsPage ssd={ssd} />
  )
}
