'use client'
import { Navbar } from '@/components'
import { PageInfosProps } from '@/types'
import Image from 'next/image'

export default function Home() {

  const pageInfos: PageInfosProps[] = [
    {
      id: 0,
      title: "Processeur",
      image: "https://i.imgur.com/5JaBK3E.jpg",
      subtitle: "Tout les processeurs du marché",
      subtitleLink: "/cpu",
      btnL: "Découvrez ou Redécrouvrez les processeurs",
      btnLlink: "/cpu",
      btnR: "Configuration personnalisé",
      btnRLink: "/configurator",
      lastSubtitle: "En savoir plus sur notre Configurateur",
      lastSubtitleLink: "/configurator",
    },
    {
      id: 1,
      title: "Carte Graphique",
      image: "https://i.imgur.com/9bNON4B.jpg",
      subtitle: "Toutes les cartes graphiques du marché",
      subtitleLink: "/gpu",
      btnL: "Découvrez ou Redécouvrez les cartes graphiques",
      btnLlink: "/gpu",
      btnR: "Configuration personnalisé",
      btnRLink: "/configurator",
      lastSubtitle: "En savoir plus sur notre configurateur",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 2,
      title: "Boitier",
      image: "https://i.imgur.com/DZPyoxi.jpg",
      subtitle: "Tout les boitiers du marché",
      subtitleLink: "/case",
      btnL: "Découvrez ou Redécouvrez les boitiers",
      btnLlink: "/case",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 3,
      title: "Refroidissement",
      image: "https://i.imgur.com/wchTTvi.jpg",
      subtitle: "",
      subtitleLink: "/cooling",
      btnL: "",
      btnLlink: "/cooling",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 4,
      title: "Mémoire Vive",
      image: "https://i.imgur.com/P05hTez.jpg",
      subtitle: "",
      subtitleLink: "/ram",
      btnL: "",
      btnLlink: "/ram",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 5,
      title: "Disque dur",
      image: "https://i.imgur.com/f8BxASB.jpg",
      subtitle: "",
      subtitleLink: "/hdd",
      btnL: "",
      btnLlink: "/hdd",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 6,
      title: "Disque SSD",
      image: "https://i.imgur.com/VajKN46.jpg",
      subtitle: "",
      subtitleLink: "/ssd",
      btnL: "",
      btnLlink: "/ssd",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 7,
      title: "Carte Mère",
      image: "https://i.imgur.com/QNagqNo.jpg",
      subtitle: "",
      subtitleLink: "/motherboard",
      btnL: "",
      btnLlink: "/motherboard",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
    {
      id: 8,
      title: "Alimentation",
      image: "https://i.imgur.com/EJP9x7A.jpg",
      subtitle: "",
      subtitleLink: "/psu",
      btnL: "",
      btnLlink: "/psu",
      btnR: "",
      btnRLink: "/configurator",
      lastSubtitle: "",
      lastSubtitleLink: "/configurator"
    },
  ]

  return (
    <>
      
    </>
  )
}
