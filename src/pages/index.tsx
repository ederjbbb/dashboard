import { Flex ,Button, Stack, useColorMode} from "@chakra-ui/react"
import { Input } from './input'
import {  useForm,SubmitHandler , FieldError} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



type SignInFormProps = {
      email : string
      password : string
      
}

const signInFormSchema = yup.object().shape({
    email : yup.string().required('Email obrigatorio').email('Email invalido'),
    password : yup.string().required('Entre com a senha'),

})



export default function Home() {
  
   const {toggleColorMode} = useColorMode();
  const handleSignin: SubmitHandler<SignInFormProps> =  async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  
  }
  const { register, formState: { errors }, handleSubmit , formState} = useForm({
    resolver : yupResolver(signInFormSchema)
  });
  
  
  
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
      onSubmit={handleSubmit(handleSignin)}

    >
      <Stack spacing='4'>
      <Input name='email' error={errors.email}type='email' label='E-mail'  {...register("email")}/>
      
      <Input name='password' error={errors.password} type='password' label='Password' {...register("password")}/>
     
      </Stack>
          

         
          <Button type='submit' mt='6'colorScheme='pink'fontSize={20}  size='lg' isLoading={formState.isSubmitting}>
            Login
          </Button>
      </Flex>
    
      
   </Flex>
  )
}


