"use client"
import { Card } from "@/components";
import { SSD } from "@/types";
import { SimpleGrid } from "@chakra-ui/react";

export default function SSDPage({ ssds }: {ssds: SSD[]}) {
    return (
        <SimpleGrid columns={[1, 2, 4]} pt={20}>
            {ssds.map((ssd) => (
                <Card key={ssd.id} id={ssd.id} name={ssd.nom} image={ssd.nom} type="SSD" link={`/ssd/${ssd.id}`} prop1={`${ssd.format}`} prop2={`${ssd.interface}`} />
            ))}
        </SimpleGrid>
    )
}