"use client"
import { Card } from "@/components"
import { Case } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"

export default function CasePage({ cases }: {cases: Case[]}) {
  return (
    <SimpleGrid columns={[1, 2, 4]} pt={20}>
        {cases.map((boitier) => (
            <Card key={boitier.id} id={boitier.id} name={boitier.nom} image={boitier.image} type="Boitier" prop1={`${boitier.format}`} prop2={`${boitier.couleur}`} link={`/case/${boitier.id}`} />
        ))}
    </SimpleGrid>
  )
}
