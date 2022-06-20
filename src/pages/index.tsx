import { Flex ,Button, Stack} from "@chakra-ui/react"
import { Input } from './input'


export default function Home() {
  return (
   <Flex 
   w= '100vw' 
   height='100vh' 
   align='center' 
   justify='center'>
    
    
    <Flex 
      as='form' 
      w='100%' 
      maxW={360} 
      bg='gray.800'
      p='8'
      borderRadius={8}
      flexDir="column"

    >
      <Stack spacing='4'>
      <Input name='email' type='email' label='E-mail' />
      <Input name='password' type='password' label='Password' />
     
      </Stack>
          

         
          <Button type='submit' mt='6'colorScheme='pink'fontSize={20}  size='lg'>
            Login
          </Button>
      </Flex>
    
      
   </Flex>
  )
}


