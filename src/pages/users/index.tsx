import {Box, Button, Flex, Text, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Tbody, Td} from '@chakra-ui/react'
import { RiAddLine, RiPencilFill, RiDeleteBinFill} from 'react-icons/ri'
import { Header } from '../../components/Header'
import Pagination from '../../components/pagination'
import { SideBar } from '../../components/SideBar'

export default function UserList(){
    return(
        <Box>
            <Header/>
            <Flex w='100%' maxW={1480} my='6' px='6' mx='auto'>
                <SideBar/>

                <Box flex={1} borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify={'space-between'} align='center'>
                        <Heading size='large' fontWeight={'normal'}>Lista de usuarios</Heading>

                            <Button 
                            as='a' 
                            size='small'
                            fontSize={'small'} 
                            colorScheme='green' 
                            p='2' 
                            leftIcon={<Icon as={RiAddLine} fontSize='16'/>}>
                                Criar Usuário
                            </Button>
                    </Flex>
                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme={'pink'}/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                <Checkbox colorScheme={'pink'} />
                                </Td>
                                <Td >
                                    <Box>
                                        <Text fontWeight={'bold'}>Eder De Brito</Text>
                                        <Text fontSize={'small'} color='gray.300'>ederjb@icloud.com</Text>
                                    </Box>
                                </Td>
                                <Td > 04 Abril 2022</Td>
                                <Td > <Button 
                        as='a' 
                        size='small'
                        fontSize={'small'} 
                        colorScheme='yellow' 
                        p='2' 
                        leftIcon={<Icon as={RiPencilFill} fontSize='16'/> }>
                            Editar
                        </Button>
                        </Td>
                        <Td > <Button 
                        as='a' 
                        size='small'
                        fontSize={'small'} 
                        colorScheme='red' 
                        p='2' 
                        leftIcon={<Icon as={RiDeleteBinFill} fontSize='16'/>}>
                            Apagar
                        </Button>
                        </Td>
                                
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}