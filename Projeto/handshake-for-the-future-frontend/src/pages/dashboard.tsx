import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaHandshake } from "react-icons/fa";
import { FiMenu} from "react-icons/fi";
import React from "react";
import { Logo } from "@choc-ui/logo";
import Navbar from '../components/Navbar';


export default function Dashboard({ children }) {
  const sidebar = useDisclosure();

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.600"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Logo />
        <Flex alignItems='center' flexDirection='column' justifyContent='center'>
          <Icon as={FaHandshake} fontSize={'60'} color='pink'/>
        </Flex>
      </Flex>
      <Navbar />
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="20"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="lg"
          />
          <Text as={'h1'} fontSize={'1.6rem'}>Handshake for the Future</Text>

          <Flex align="center">
            <Icon color="gray.600" as={FaBell} cursor="pointer" />
            <Avatar
              ml="8"
              mr="8"
              size="lg"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/39305813?s=400&u=1de19e60c78aa92454645212b7a2286d7001f953&v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="900px">
            { children }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}