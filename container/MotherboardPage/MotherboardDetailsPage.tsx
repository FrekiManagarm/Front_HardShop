"use client"
import { MotherBoard } from "@/types"
import { Container, Flex, Text, Box, Stack, VStack, Button, Heading, SimpleGrid, StackDivider, useColorModeValue, VisuallyHidden, List, ListItem, Image } from "@chakra-ui/react"

export default function MotherboardDetailsPage({motherboard}: { motherboard: MotherBoard }) {
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
            src={
              motherboard.image
            }
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
              {motherboard.nom}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {motherboard.constructeur}
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
                {motherboard.description}
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
                  {motherboard.format}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Fréquence :
                  </Text>{' '}
                  {motherboard.fréquence_mémoire}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Compatibilité :
                  </Text>{' '}
                  {motherboard.proco_compatible}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Socket :
                  </Text>{' '}
                  {motherboard.socket}
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
                    href={motherboard.link}
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
