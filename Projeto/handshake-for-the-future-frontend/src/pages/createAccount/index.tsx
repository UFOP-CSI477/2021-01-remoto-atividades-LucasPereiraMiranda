import { Input, Box, GridItem, Heading, SimpleGrid, useColorModeValue,Text, chakra, Stack, FormControl, FormLabel, InputGroup, InputLeftAddon, Textarea, FormHelperText, Flex, Avatar, Icon, Button, VisuallyHidden, Select, Checkbox, RadioGroup, Radio } from '@chakra-ui/react';
import { Header } from '../../components/Header'

export default function CreateAccount() {
  return (
    <>
    <Header />
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
                Adicione os seus dados pessoais
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
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
                      Sobre você
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
                      htmlFor="avatarUrl"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      URL do seu avatar
                    </FormLabel>
                    <Input
                      type="text"
                      name="avatarUrl"
                      id="avatarUrl"
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
                      URL do Linkedin
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
                      URL do Intagram
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
                  

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Email
                    </FormLabel>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="birthdate"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Data de Nascimento
                    </FormLabel>
                    <Input
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      autoComplete="birthdate"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="password"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Senha
                    </FormLabel>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
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
                      htmlFor="userType"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Tipo de usuário
                    </FormLabel>
                    <Select
                      id="userType"
                      name="userType"
                      autoComplete="userType"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>Fundador Startup</option>
                      <option>Investidor</option>
                    </Select>
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
    </>
  );
}
