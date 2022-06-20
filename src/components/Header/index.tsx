import { Flex} from '@chakra-ui/react'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'


export function Header(){
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
          <Logo/>
          <SearchBox/>
            <Flex align='center' ml='auto'>
                
                <NotificationsNav/>
                <Profile/>
            </Flex>
        </Flex>
        
        
    )
}