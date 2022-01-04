import Dashboard from '../dashboard';

import { 
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link } from '@chakra-ui/react';

export default function Categories(props){
  const listCategories = props.data.map((category) =>
    <CardCategory key={category.id} category={category} />
  );
  return (
    <Dashboard>
      {listCategories}
    </Dashboard>
  );
}

const CardCategory = ({ category }) => {
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
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Categoria
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              {category.name}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {category.description}
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};


export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3003/categories`)
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
