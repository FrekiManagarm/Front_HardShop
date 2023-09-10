import { Case } from "@/types"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Card from "@/components/Card/Card"
import { Navbar } from "@/components"
import CasePage from "@/container/CasePage/CasePage"

export const metadata : Metadata = {
    title: "Hardaware | Boitiers",
    description: "Vous trouverez ici la liste de tout les boitiers"
}

async function getCases() {
    const res = await fetch(`${process.env.API_URL}/api/Boitiers`, {
        cache: "no-store",
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
    })

    if (res.status == 404) {
        notFound()
    }

    const data : Case[] = await res.json()

    return data
}

export default async function CaseList() {

  const cases: Case[] = await getCases()

  return (
    <>
      <CasePage cases={cases} />
    </>
  )
}
