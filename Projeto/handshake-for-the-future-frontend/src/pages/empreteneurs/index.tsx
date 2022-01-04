import Dashboard from '../dashboard';

import { 
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link } from '@chakra-ui/react';

export default function Categories(props){
  const listEmpreteneurs = props.data.map((empreteneur) =>
    <CardEmpreteneus key={empreteneur.id} empreteneur={empreteneur} />
  );
  return (
    <Dashboard>
      {listEmpreteneurs}
    </Dashboard>
  );
}

const CardEmpreteneus = ({ empreteneur }) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >

        <Box p={6}>
          <Box>
          <Image
            w="full"
            h={56}
            fit="cover"
            src="https://avatars.githubusercontent.com/u/39305813?s=400&u=1de19e60c78aa92454645212b7a2286d7001f953&v=4"
            alt="avatar"
          />
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Empreendedor
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              {empreteneur.name}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {empreteneur.description}
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};


export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3003/users?userType=founder`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
