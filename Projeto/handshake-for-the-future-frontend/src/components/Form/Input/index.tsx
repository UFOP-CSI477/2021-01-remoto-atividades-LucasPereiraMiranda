import { FormControl,FormLabel,Input as ChakraInput,InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name:string;
  label?:string
}

export function Input({name,label,...allOthers}:InputProps){
  return (
    <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput id={name} name='email' type='email' focusBorderColor='pink.500' background='gray.900' variant='filled' _hover={{ backgroundColor: 'gray.900'}} {...allOthers}/>
    </FormControl>
  )
}