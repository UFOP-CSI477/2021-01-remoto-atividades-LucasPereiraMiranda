import {
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import React from "react";

import Link from 'next/link'

const NavItem = (props) => {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      color="whiteAlpha.700"
      _hover={{
        bg: "blackAlpha.300",
        color: "whiteAlpha.900",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: "gray.300",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};


export default function Navbar() {

  return (
    <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>
          <Link href="/home">
            Home
          </Link>
        </NavItem>
        <NavItem icon={FaRss}>
          <Link href="/startups">
            Listar Startups
          </Link>
        </NavItem>
        <NavItem icon={FaClipboardCheck}>
          <Link href="/startups/create">
            Criar Startups
          </Link>
        </NavItem>
        <NavItem icon={FaRss}>
          <Link href="/empreteneurs">
            Listar Empreendedores
          </Link>
        </NavItem>
        <NavItem icon={FaClipboardCheck}>
          <Link href="/empreteneurs/create">
            Criar Empreendedores
          </Link>
        </NavItem>
        <NavItem icon={AiFillGift}>
          <Link href="/categories">
            Categorias
          </Link>
        </NavItem>
        <NavItem icon={BsGearFill}>
          <Link href="/configurations">
            Configurações
          </Link>
        </NavItem>
    </Flex>
  )
}