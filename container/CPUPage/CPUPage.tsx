"use client"
import { Card } from "@/components"
import { CPU } from "@/types"
import { SimpleGrid } from "@chakra-ui/react"

export default function CPUPage({ cpus }: { cpus: CPU[] }) {
    return (
        <SimpleGrid columns={[1, 2, 4]} pt={20}>
            {cpus.map((cpu) => (
                <Card key={cpu.id} id={cpu.id} image={cpu.image} name={cpu.nom} prop1={`${cpu.nb_coeur} coeurs`} prop2={`${cpu.nb_threads} threads`} type="Processeur" link={`/cpu/${cpu.id}`} />
            ))}
        </SimpleGrid>
    )
}