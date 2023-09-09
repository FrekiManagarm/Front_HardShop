import { Navbar } from "@/components";
import CaseDetailsPage from "@/container/CasePage/CaseDetailsPage";
import { Metadata } from "next";
import Image from "next/image";

export const metadata : Metadata = {
    title: "",
    description: ""
}

async function getCase(id: number) {
  try {
    const res = await fetch(`http://localhost:3000/api/case/${id}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      cache: "no-cache"
    })

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function CaseDetails({ params }: {params: any}) {

  const boitier = await getCase(params.id)

  return (
    <>
      <CaseDetailsPage boitier={boitier} />
    </>
  )
}
