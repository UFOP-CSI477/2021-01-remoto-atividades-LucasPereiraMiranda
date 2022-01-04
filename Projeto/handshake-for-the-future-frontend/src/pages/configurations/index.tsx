import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Dashboard from '../dashboard';

export default function Configurations(){
  return (
    <Dashboard>
      <UserCart />
    </Dashboard>
  );
}

import React from "react";


const UserCart = () => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://avatars.githubusercontent.com/u/39305813?s=400&u=1de19e60c78aa92454645212b7a2286d7001f953&v=4"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            Lucas Pereira Miranda
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            Empreendedor e Engenheiro de Software
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
};