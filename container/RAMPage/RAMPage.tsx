"use client"
import { RAM } from "@/types"
import { Card } from "@/components"
import { SimpleGrid } from "@chakra-ui/react"

export default function RAMPage({ rams } : { rams: RAM[] }) {
  return (
    <SimpleGrid columns={[1, 2, 4]} pt={20}>
        {rams.map((ram) => (
            <Card key={ram.id} id={ram.id} image={ram.image} link={`/ram/${ram.id}`} name={ram.nom} prop1={`${ram.capacité}`} prop2={`${ram.latence}`} type="Mémoire vive" />
        ))}
    </SimpleGrid>
  )
}
