import { chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link } from '@chakra-ui/react';
import Dashboard from '../dashboard';

export default function Startups(props){
  const listStartups = props.data.map((startup) =>
    <StartupCard key={startup.id} startup={startup} />
  );
  return (
    <Dashboard>
      <Box>
        { listStartups }
      </Box>
    </Dashboard>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3003/startups`)
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


const StartupCard = ({ startup }) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
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
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={startup.logoUrl}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Startup
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              {startup.name}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {startup.description}
            </chakra.p>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {startup.cellphone}
            </chakra.p>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {startup.linkedinUrl}
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
