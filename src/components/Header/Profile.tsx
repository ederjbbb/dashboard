import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData? : boolean
}
export default function Profile ({showProfileData = true} : ProfileProps) {

    
    return(
        <Flex>
           {showProfileData && (
                <Box mr='4' textAlign='right'>
                <Text>Eder Brito</Text>
                
                <Text color='gray.300' fontSize='small'>ederjb@icloud.com</Text>
            </Box>
           )}
            <Avatar size='md' name='Eder Brito' src='https://media-exp2.licdn.com/dms/image/C4D03AQEcHx3flZAqhA/profile-displayphoto-shrink_200_200/0/1586170768677?e=1660780800&v=beta&t=Kr_qcy59CBqc_6uBjjuuJsZGu4ONKKrjSX-3lea-YFw'/>
        </Flex>
    )
}