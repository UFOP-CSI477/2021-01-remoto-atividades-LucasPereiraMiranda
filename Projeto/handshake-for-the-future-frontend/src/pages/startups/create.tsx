import { Input, Box, GridItem, Heading, SimpleGrid, useColorModeValue,Text, chakra, Stack, FormControl, FormLabel, InputGroup, InputLeftAddon, Textarea, FormHelperText, Flex, Avatar, Icon, Button, VisuallyHidden, Select, Checkbox, RadioGroup, Radio } from '@chakra-ui/react';

import Dashboard from '../dashboard';

export default function CreateStartups(){
  const registerStartup = async event => {
    event.preventDefault()
    console.log('cheguei aqui')
    const res = await fetch('http://localhost:3003/startups', {
      body: JSON.stringify({
        name: event.target.name.value,
        description: event.target.description.value,
        localization: event.target.localization.value,
        cellphone: event.target.cellphone.value,
        foundation_date: event.target.foundation_date.value,
        logoUrl: event.target.logoUrl.value,
        linkedinUrl: event.target.linkedinUrl.value,
        facebookUrl: event.target.facebookUrl.value,
        instagramUrl: event.target.instagramUrl.value,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3003'
      },
      method: 'POST'
    })

    const result = await res.json()
    return result;
  }
  return (
    <Dashboard>
      <Box bg={useColorModeValue("gray.50", "inherit")} p={50}>
        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{ base: "initial", md: "grid" }}
          >
            <GridItem colSpan={{ md: 1 }}>
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="bold" lineHeight="6">
                  Realize o seu cadastro
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  Adicione os seus dados da Startup
                </Text>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{ sm: "hidden" }}
                onSubmit={registerStartup}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg={useColorModeValue("white", "gray.700")}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="name"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Nome
                      </FormLabel>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="description"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Sobre a Startup
                      </FormLabel>
                      <Input
                        type="text"
                        name="description"
                        id="description"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="localization"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Localização
                      </FormLabel>
                      <Input
                        type="text"
                        name="localization"
                        id="localization"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="cellphone"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Número de Telefone
                      </FormLabel>
                      <Input
                        type="text"
                        name="cellphone"
                        id="cellphone"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="foundation_date"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Data de fundação
                      </FormLabel>
                      <Input
                        type="date"
                        name="foundation_date"
                        id="foundation_date"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="logoUrl"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        URL do logo
                      </FormLabel>
                      <Input
                        type="text"
                        name="logoUrl"
                        id="logoUrl"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="linkedinUrl"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        URL do Facebook
                      </FormLabel>
                      <Input
                        type="text"
                        name="linkedinUrl"
                        id="linkedinUrl"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="facebookUrl"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        URL do Facebook
                      </FormLabel>
                      <Input
                        type="text"
                        name="facebookUrl"
                        id="facebookUrl"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="instagramUrl"
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        URL do Instagram
                      </FormLabel>
                      <Input
                        type="text"
                        name="instagramUrl"
                        id="instagramUrl"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{ base: 4, sm: 6 }}
                  py={3}
                  bg={useColorModeValue("gray.50", "gray.900")}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    _focus={{ shadow: "" }}
                    fontWeight="md"
                  >
                    Enviar
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
          <Box py={5}>
            <Box
              borderTop="solid 1px"
              borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Dashboard>
  );
}


// export async function getStaticProps(context) {
//   const res = await fetch(`http://localhost:3003/startups`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

