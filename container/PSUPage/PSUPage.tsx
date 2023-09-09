"use client"
import { Card } from "@/components"
import { PSU } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"

export default function PSUPage({ psus } : { psus: PSU[] }) {
  return (
    <SimpleGrid columns={[1, 2, 4]} pt={20}>
        {psus.map((psu) => (
            <Card key={psu.id} id={psu.id} name={psu.nom} image={psu.image} link={`/psu/${psu.id}`} type="Alimentation" prop1={`${psu.format}`} prop2={`${psu.certif}`} />
        ))}
    </SimpleGrid>
  )
}
