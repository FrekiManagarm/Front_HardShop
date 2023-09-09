"use client"
import { Cooling } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"
import { Card } from "@/components"

export default function CoolingPage({ coolings }: {coolings: Cooling[]}) {
    return (
        <SimpleGrid columns={[1, 2, 4]} pt={20}>
            {coolings.map((cooling) => (
                <Card key={cooling.id} id={cooling.id} name={cooling.nom} image={cooling.image} prop1={`${cooling.format}`} prop2={`${cooling.bruit}`} type="Refroidissement" link={`/cooling/${cooling.id}`} />
            ))}
        </SimpleGrid>
    )
}