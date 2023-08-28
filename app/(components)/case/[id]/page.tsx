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
      next: {
        revalidate: 0
      }
    })

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function CaseDetails({ params }: {params: any}) {

  const boitier = await getCase(params.id)

  return (
    <div>
        <h1>Case Details</h1>
        <h2>{boitier.nom}</h2>
        <Image src={boitier.image} alt="boitier image" />
    </div>
  )
}
