"use client"
import { Card } from "@/components"
import { HDD } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"

export default function HDDPage({ hdds }: {hdds : HDD[]}) {
  return (
    <SimpleGrid columns={[1, 2, 4]} pt={20}>
        {hdds.map((hdd) => (
            <Card key={hdd.id} id={hdd.id} image={hdd.image} name={hdd.nom} prop1={`${hdd.capacité} Mo`} type="Disque dur" prop2={`${hdd.transfert}`} link={`/hdd/${hdd.id}`} />
        ))}
    </SimpleGrid>
  )
}
