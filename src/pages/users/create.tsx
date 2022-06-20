import {Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack} from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar'
import { Input } from '../input';
import { RiSaveLine } from 'react-icons/ri';

export default function CreateUser(){
    return(
        <Box>
            <Header/>
            <Flex w='100%' maxW={1480} my='6' px='6' mx='auto'>
                <SideBar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                 <Heading fontSize={'lg'} fontWeight='mormal' >Criar Usuario</Heading>

                 <Divider my='6 ' borderColor={'gray.700'}/>

                 <VStack spacing='8'>

                     <SimpleGrid  spacing='8'minChildWidth='240px'  width='100%'> 
                         <Input name='name' label='Nome'/>
                         <Input name='email' type='email' label='E-mail'/>
                     </SimpleGrid>

                     <SimpleGrid minChildWidth={'240px'} spacing='8' w='100%'> 
                         <Input name='password' type='password'label='Senha'/>
                         <Input name='password' type='password'label='Confrmar senha'/>
                     </SimpleGrid>
                 </VStack>
                 <Flex mt='8' justify='flex-end'>
                     <HStack  spacing='6'>
                        <Button colorScheme='whiteAlpha'>Cancelar</Button>
                        <Button colorScheme='pink'>< Icon as={RiSaveLine} mr='3' />Salvar</Button>
                     </HStack>
                    
                 </Flex>
                </Box>
            </Flex>
        </Box>
    )
}