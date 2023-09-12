import { Navbar } from "@/components";
import CaseDetailsPage from "@/container/CasePage/CaseDetailsPage";
import { Case } from "@/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata : Metadata = {
    title: "",
    description: ""
}

async function getCase(id: number) {
  // try {
    const res = await fetch(`${process.env.API_URL}/api/Boitier/${id}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      cache: "no-store"
    })

    const data : Case = await res.json()

    return data
  // } catch (error) {
    // console.log(error)
  // }
}

export default async function CaseDetails({ params }: {params: any}) {

  const boitier : Case = await getCase(params.id)

  return (
    <>
      <CaseDetailsPage boitier={boitier} />
    </>
  )
}
