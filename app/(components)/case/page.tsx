import { Case } from "@/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata : Metadata = {
    title: "Hardaware | Boitiers",
    description: "Vous trouverez ici la liste de tout les boitiers"
}

async function getCases() : Promise<Case[]> {
    const res = await fetch('/api/case', {
        cache: "no-cache"
    })

    if (res.status == 404) {
        notFound()
    }

    return res.json()
}

export default function CaseList() {
  return (
    <div>CaseList</div>
  )
}
