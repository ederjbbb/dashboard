import {Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, useBreakpointValue, VStack} from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar'
import { Input } from '../input';
import { RiSaveLine } from 'react-icons/ri';
import Link from 'next/link';
import {  useForm,SubmitHandler , FieldError, use} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


type CreateUserFormData = {
    email : string
    password : string
    name : string
    password_confirmation : string
    
}

const createUsreFormSchema = yup.object().shape({
  email : yup.string().required('Email obrigatorio').email('Email invalido'),
  password : yup.string().required('Entre com a senha').min(6, 'Minimo 6 caracteres'),
  password_confirmation : yup.string().oneOf([null, yup.ref('password')], 'Senhas devem ser iguais !!'),
  name : yup.string().required('Digite seu nome '),

})

export default function CreateUser(){

      const { register, formState: { errors }, handleSubmit , formState} = useForm({
          resolver : yupResolver(createUsreFormSchema)
      })

      const  handleCreateUser : SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values)
      }

    return(
        <Box>
            <Header/>
            <Flex w='100%' maxW={1480} my='6' px='6' mx='auto'>
                <SideBar/>

                <Box as='form' flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}   onSubmit={handleSubmit(handleCreateUser)}    >
                 <Heading fontSize={'lg'} fontWeight='mormal' >Criar Usuario</Heading>

                 <Divider my='6 ' borderColor={'gray.700'}/>

                 <VStack spacing='8'>

                     <SimpleGrid  spacing={['6', '8']}minChildWidth='240px'  width='100%'> 
                         <Input name='name' label='Nome' {...register('name')} error={errors.name}/>
                         <Input name='email' type='email' label='E-mail' {...register('email') } error={errors.email} />
                     </SimpleGrid>

                     <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w='100%'> 
                         <Input name='password' type='password'label='Senha' {...register('password')} error={errors.password}/>
                         <Input name='password_confirmation' type='password'label='Confrmar senha' 
                         {...register('password_confirmation')} error={errors.password_confirmation}/>
                     </SimpleGrid>
                 </VStack>
                 <Flex mt='8' justify='flex-end'>
                     <HStack  spacing='6'>
                         <Link href='/users'>
                         <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                         </Link>
                        
                        <Button 
                        type='submit' 
                        isLoading={formState.isSubmitting}
                        colorScheme='pink'>< Icon as={RiSaveLine} mr='3'  />Salvar</Button >
                     </HStack>
                    
                 </Flex>
                </Box>
            </Flex>
        </Box>
    )
}