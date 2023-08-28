import { Case } from "@/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Card from "@/components/Cards/Card"

export const metadata : Metadata = {
    title: "Hardaware | Boitiers",
    description: "Vous trouverez ici la liste de tout les boitiers"
}

async function getCases() : Promise<Case[]> {
    const res = await fetch(`http://localhost:3000/api/case`, {
        cache: "no-cache",
        method: "GET"
    })

    if (res.status == 404) {
        notFound()
    }

    return res.json()
}

export default async function CaseList() {

  const cases: Case[] = await getCases()

  return (
    <div>
      <h1>Case List</h1>
      <div>
        {cases.map((boitier) => (
          <Card image={boitier.image} description={boitier.description} name={boitier.nom} link={`/case/${boitier.id}`} />
        ))}
      </div>
    </div>
  )
}
