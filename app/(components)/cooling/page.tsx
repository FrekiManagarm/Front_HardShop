import { Navbar } from "@/components"
import CoolingPage from "@/container/CoolingPage/CoolingPage"
import { Cooling } from "@/types"
import { Metadata } from "next"
import { notFound } from 'next/navigation'

export const metadata : Metadata = {
    title: "Hardaware | Refroidissements",
    description: "Vous trouverez ici la liste de tout les refroidissements"
}

async function getCoolings() {
    const res = await fetch(`${process.env.LOCAL_API_URL}/api/cooling`, {
        cache: "no-cache"
    })

    if (res.status == 404) {
        notFound()
    }

    return res.json()
}

export default async function CoolingList() {

    const coolings : Cooling[] = await getCoolings();

  return (
    <>
        <CoolingPage coolings={coolings} />
    </>
  )
}
