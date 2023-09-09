"use client"
import { RAM } from "@/types"
import { Container, Flex, Text, Box, Stack, VStack, Button, Heading, SimpleGrid, StackDivider, useColorModeValue, List, ListItem, Image } from "@chakra-ui/react"


export default function RAMDetailsPage({ ram } : { ram: RAM }) {
  return (
    <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                <Image
                    rounded={'md'}
                    alt={'product image'}
                    src={ram.image}
                    fit={'contain'}
                    align={'center'}
                    w={'100%'}
                    h={{ base: '100%', sm: '400px', lg: '500px' }}
                />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={'header'}>
                    <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    {ram.nom}
                    </Heading>
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
                        {ram.description}
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
                                Capacité :
                            </Text>{' '}
                        {ram.capacité} Go
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Interface :
                            </Text>{' '}
                        {ram.interface}
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Latence :
                            </Text>{' '}
                        {ram.latence}
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Quantité :
                            </Text>{' '}
                        {ram.quantité} pièces
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
                    borderRadius={"lg"}
                    _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                    }}>
                    Utiliser pour une configuration
                </Button>
                <Button
                    as="a"
                    href={ram.link}
                    rounded={"lg"}
                    w={'full'}
                    mt={8}
                    size={"lg"}
                    py={7}
                    bg={useColorModeValue('orange.400', 'orange.50')}
                    color={useColorModeValue('white', 'gray.900')}
                    textTransform={"uppercase"}
                    borderRadius={"lg"}
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
