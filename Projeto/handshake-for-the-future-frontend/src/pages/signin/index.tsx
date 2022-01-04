import {Flex,Button,Stack,Text,VStack} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'


export default function SignIn() {
  return (
    <Flex width='100vw' height='100vh' alignItems='center' justifyContent='center' flexDirection='column'>
      <VStack spacing='4'>
          <Text as='h1' fontSize='25px'>Handshake for the future</Text>
          <Flex
            as='form'
            width='100%'
            maxWidth={360}
            background='gray.800'
            padding={8}
            borderRadius={8}
            flexDirection='column'
          >
            <Stack spacing='4'>
                <Input type='email' name='email' label='E-mail' />
                <Input type='password' name='password' label='Senha' />
            </Stack>
            <Button type='submit' marginTop={6} colorScheme={'pink'}>Entrar</Button>
          </Flex>
      </VStack>
    </Flex>
  )
}
