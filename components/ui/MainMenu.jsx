"use client"
import { CloseIcon } from '@chakra-ui/icons'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    ResponsiveValue,
    Text,
    useDisclosure,
    PositionProps,
    VStack,
    Button
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement, useEffect, useRef } from 'react'
import './Mainmenu.css'

export default function MainMenu({position1  = "fixed", position2 = 'fixed'}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const overlayRef = useRef(null)
    const elementsRef = useRef([])

    useEffect(() => {
        const elements = elementsRef.current
        const overlay = overlayRef.current

        const handleMouseEnter = (e) => {
            const rect = e.target.getBoundingClientRect()
            overlay.style.opacity = "1"
            overlay.style.width = `${rect.width + 30}px`
            overlay.style.height = `${rect.height + 20}px`
            overlay.style.top = `${rect.top - 10}px`
            overlay.style.left = `${rect.left - 15}px`
            clearTimeout(timeout)
        }

        const handleMouseLeave = () => {
            timeout = setTimeout(() => {
                overlay.style.opacity = '0'
            }, 300)
        }

        elements.forEach((element) => {
            element?.addEventListener('mouseenter', handleMouseEnter)
            element?.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            elements.forEach((element) => {
                element?.addEventListener('mouseenter', handleMouseEnter)
                element?.addEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    let timeout

    return (
        <>
      <Box
        bg={'#00000010'}
        className="overlay"
        ref={overlayRef}
        position={position1}
        zIndex={80}
        top={'10px'}
      />
      <Flex
        position={position2}
        w={'100%'}
        zIndex={99}
        flexDirection="row"
        px={{base: 5, xl: 20}}
        justifyContent={'space-between'}
        py={5}
      >
        <Flex justifyContent={'flex-start'} w={'25%'}>
          <Link href={'/'}>
            <Image
              src="https://i.imgur.com/ofOEeOp.png"
              width={120}
              height={50}
              style={{ borderRadius: 20 }}
              alt={'logo-clone-tesla-andrea-gauvreau'}
            />
          </Link>
        </Flex>
        <Flex
          gap={8}
          justifyContent={'flex-end'}
          w={'25%'}
          display={{base: 'none', xl: 'flex'}}
        >
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Assistance
            </Text>
          </Link>
          <Link href={'/configurator'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Configurateur
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Connexion
            </Text>
          </Link>
          <Text variant={'menuLink'} className='hoveredLink' onClick={onOpen} cursor="pointer" ref={el => elementsRef.current.push(el)}>
            Menu
          </Text>
        </Flex>
        <Text
          onClick={onOpen}
          cursor="pointer"
          display={{base: 'inline', xl: 'none'}}
          borderRadius={5}
          bg={'#00000010'}
          backdropFilter={'blur(6px)'}
          px={4}
          py={2}
          variant={'menuLink'}
        >
          Menu
        </Text>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={'lg'}>
          <DrawerOverlay backdropFilter={'blur(5px)'} bg={'transparent'}>
            <DrawerContent>
              <Flex
                h={'100px'}
                alignItems="center"
                justifyContent={'flex-end'}
                pr={5}
              >
                <Button onClick={onClose}>
                  <CloseIcon />
                </Button>
              </Flex>
              <DrawerBody>
                <VStack spacing={7} align="start" px={5}>
                  {[
                    {
                      title: 'Processeur',
                      url: "/cpu"
                    },
                    {
                      title: "Carte Graphique",
                      url: "/gpu"
                    },
                    {
                      title: "Carte Mère",
                      url: "/motherboard"
                    },
                    {
                      title: "Boitier",
                      url: "/case"
                    },
                    {
                      title: "Mémoire Vive",
                      url: "/ram",
                    },
                    {
                      title: "Alimentation",
                      url: "/psu"
                    },
                    {
                      title: "Refroidissement",
                      url: "/cooling"
                    },
                    {
                      title: "Disque SSD",
                      url: "/ssd",
                    },
                    {
                      title: ""
                    }
                  ].map(item => (
                    <Link key={item.url} href="/#">
                      <Text
                        className="hoveredLink"
                        variant={'menuLink'}
                        ref={el => elementsRef.current.push(el)}
                      >
                        {item.title}
                      </Text>
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </>
    )
}