import { Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../context/SideBarDrawerContext'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'



export function Header(){

    const { onOpen } = useSideBarDrawer()

    const isWebVersion = useBreakpointValue({
        base : false,
        lg : true
    })

    return(
        <Flex 
        as='header' 
        width='100%' 
        maxW={1480} 
        h='20'
        mt='4'
        px='6'
        mx='auto'
        align='center'
        
        >
            { !isWebVersion && (
                <IconButton
                aria-label='open navigation'
                icon={<Icon as={RiMenuLine}/>}
                fontSize='24'
                variant={'unstyled'}
                onClick={onOpen}
                mr='2'
                >

                </IconButton>
            )}
            
          <Logo/>
          {isWebVersion && <SearchBox/> }
            <Flex align='center' ml='auto'>
                
                <NotificationsNav/>
                <Profile showProfileData = {isWebVersion}/>
            </Flex>
        </Flex>
        
        
    )
}