import { Box,Text } from '@chakra-ui/react';
import Dashboard from '../dashboard';

export default function Home(){
  return (
    <Dashboard>
      <Box display="flex" alignItems='center' justifyContent='center' height={'50%'}>
        <Text as='h1' fontSize='25px'>Seja bem vindo ao sistema. Utilize a nossa solução para auxiliar a sua startup crescer.</Text>
      </Box>
    </Dashboard>
  );
}