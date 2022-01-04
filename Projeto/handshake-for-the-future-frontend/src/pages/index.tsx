import { Flex } from '@chakra-ui/react'
import CallToAction from '../components/CallToAction'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function SignIn() {
  return (
    <Flex width='100vw' height='100vh' alignItems='center' justifyContent='center' flexDirection='column'>
      <Header />
      <Flex width='100vw' height='85vh' alignItems='center' justifyContent='center'>
        <CallToAction></CallToAction>
      </Flex>
      <Footer />
    </Flex>
  )
}
