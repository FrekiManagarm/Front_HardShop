"use client"
import { Card } from "@/components"
import { GPU } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"

export default function GPUPage({ gpus } : { gpus: GPU[] }) {
  return (
    <SimpleGrid columns={[1, 2, 4]} pt={20}>
        {gpus.map((gpu) => (
            <Card key={gpu.id} id={gpu.id} image={gpu.image} name={gpu.nom} prop1={`${gpu.nb_coeur} coeurs`} prop2={`${gpu.frequence}`} type="Carte Graphique" link={`/gpu/${gpu.id}`} />
        ))}
    </SimpleGrid>
  )
}
