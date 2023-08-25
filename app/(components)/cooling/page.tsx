import { Cooling } from "@/types"
import { Metadata } from "next"
import { notFound } from 'next/navigation'

export const metadata : Metadata = {
    title: "Hardaware | Refroidissements",
    description: "Vous trouverez ici la liste de tout les refroidissements"
}

async function getCoolings() : Promise<Cooling[]> {
    const res = await fetch('/api/cooling', {
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
    <div>
        CoolingList
    </div>
  )
}
