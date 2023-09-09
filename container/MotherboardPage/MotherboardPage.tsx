"use client"
import { MotherBoard } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"
import { Card } from "@/components"

export default function MotherboardPage({ motherboards }: {motherboards: MotherBoard[]}) {
  return (
    <SimpleGrid columns={[1, 2, 4]} pt={20}>
        {motherboards.map((mb) => (
            <Card key={mb.id} id={mb.id} name={mb.nom} image={mb.image} link={`/motherboard/${mb.id}`} type="Carte Mère" prop1={`${mb.constructeur}`} prop2={`${mb.format}`} />
        ))}
    </SimpleGrid>
  )
}
