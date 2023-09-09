"use client"
import { Cooling } from "@/types"
import { Container, Flex, Text, Box, chakra, Stack, VStack, Button, Heading, SimpleGrid, StackDivider, useColorModeValue, VisuallyHidden, List, ListItem } from "@chakra-ui/react"
import Image from "next/image"

export default function CoolingDetailsPage({ cooling }: { cooling: Cooling }) {
    return (
        <Container maxW={'7xl'} pt={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            alt={'product image'}
            src={
              cooling.image
            }
            objectFit='contain'
            width={500}
            height={500}
            quality={100}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {cooling.nom}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {cooling.type}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {cooling.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('orange.500', 'orange.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Détails
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Format :
                  </Text>{' '}
                  {cooling.format}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Nuisances sonores :
                  </Text>{' '}
                  {cooling.bruit}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Matériaux :
                  </Text>{' '}
                  {cooling.matériaux}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Socket :
                  </Text>{' '}
                  {cooling.socket}
                </ListItem>
              </List>
            </Box>
          </Stack>

            
                <Button
                    rounded={'lg'}
                    w={'full'}
                    mt={8}
                    size={'lg'}
                    py={'7'}
                    bg={useColorModeValue('gray.900', 'gray.50')}
                    color={useColorModeValue('white', 'gray.900')}
                    textTransform={'uppercase'}
                    _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                    }}>
                    Utiliser pour une configuration
                </Button>
                <Button
                    as="a"
                    rounded={"lg"}
                    href={cooling.link}
                    w={'full'}
                    size={'lg'}
                    py={7}
                    bg={useColorModeValue('orange.400', 'orange.50')}
                    color={useColorModeValue('white', 'gray.900')}
                    textTransform={"uppercase"}
                    _hover={{
                        transform: "translateY(2px)",
                        boxShadow: "lg"
                    }}
                >
                    Plus de détails
                </Button>
        </Stack>
      </SimpleGrid>
    </Container>
    )
}