export default interface CPU {
    id: number
    nom: string
    image: string
    architecture: string
    cache: string
    chipset: string
    chipset_graphique: string
    frequence: string
    frequence_boost: string
    nb_coeur: number
    nb_threads: number
    description: string
    overclocking: boolean
    socket: string
    type: string
    link: string
}