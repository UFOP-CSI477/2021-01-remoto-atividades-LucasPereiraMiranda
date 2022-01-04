import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  LinkOverlay,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

const CallToAction = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 pessoas analisando o laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color={useColorModeValue("brand.600", "gray.300")}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Para o futuro!
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          Estamos aqui para ligar startups a emprendedores
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          Utilize a plataforma e tenha novos insights e investimentos em seu negócio!
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <Box paddingRight='50px'>
            <Link href="/home">Acesse o sistema</Link>
          </Box>
          <Box paddingRight='50px'>
            <Link href="/createAccount">Crie a sua conta</Link>
          </Box>
          <Box>
            <Link href="/signin">Realizar Login</Link>
          </Box>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default CallToAction;