import { Flex, Box, Stack, Text, Link, Icon, 
    useBreakpointValue, Drawer, DrawerOverlay, 
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody} from '@chakra-ui/react'
import { } from 'react-icons/ri'
import { useSideBarDrawer } from '../context/SideBarDrawerContext'
import { SideBarNav } from './SideBarNav'


export   function SideBar(){

        const { isOpen, onClose} = useSideBarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base : true,
        lg : false
    })

    if(isDrawerSidebar){
        return (
            <Drawer isOpen={isOpen} placement={'left'}   onClose={onClose } >
            <DrawerOverlay>
                <DrawerContent bg='gray.900' p='4'>
                    <DrawerCloseButton mt='6'/>
                        <DrawerHeader>Navegacao</DrawerHeader>
                        <DrawerBody>
                        <SideBarNav/>
                        </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        )
        
    }
    return(

    <Flex>
        <Box as='aside' w='64' mr='8' >
         <SideBarNav/>
        </Box>
    </Flex>
    )
}