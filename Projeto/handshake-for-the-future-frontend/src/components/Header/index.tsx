import { Flex, Text, Icon, Box,Avatar,HStack } from '@chakra-ui/react'
import { FaHandshake } from 'react-icons/fa';
import { RiNotificationLine, RiSearch2Line, RiUserAddLine } from 'react-icons/ri';

export function Header() {
  return (
      <Flex width='100%' as='header' maxWidth={'auto'} height='15%' marginX='auto' paddingX='6' alignItems='center' bg='gray.700'justifyContent='space-around'>
        <Flex alignItems='center' flexDirection='column' justifyContent='center'>
          <Icon as={FaHandshake} fontSize={'60'} color='pink'/>
          <Text fontSize='3xl' fontWeight='bold' width='90' as='span'>Handshake for the future</Text>
        </Flex>
        {/* <Flex alignItems='center' justifyContent='center'>
          <HStack spacing='4'>
            <Box>
              <Text>Lucas Pereira Miranda</Text>
              <Text color='gray.300' fontSize='small'>lucas.miranda1@aluno.ufop.edu.br</Text>
            </Box>
            <Avatar size='md' name='Lucas Pereira Miranda' src='https://avatars.githubusercontent.com/u/39305813?v=4'/>
          </HStack>
        </Flex> */}
      </Flex>
  )
}


