import { Flex, Text } from '@chakra-ui/react'


export function Footer() {
  return (
      <Flex width='100%' as='footer' maxWidth={'auto'} height='10%' marginX='auto' alignItems='center' bg='gray.400'justifyContent='center'>
        <Text color='black'>For the future! All rights reserved</Text>
      </Flex>
  )
}
