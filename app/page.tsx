'use client'
import MainMenu from '@/components/ui/MainMenu'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {

  const pageInfos = [
    {
      id: 0 
    },
  ]

  return (
    <Flex
      w={'99vw'}
      h={'100vh'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <MainMenu />

    </Flex>
  )
}
