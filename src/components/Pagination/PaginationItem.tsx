import { Button } from "@chakra-ui/react";


interface PaginationItemProps {
    number : number
    isCurrent? : boolean
}

export function PaginationItem ({isCurrent = false, number} : PaginationItemProps) {
    
    if(isCurrent){
        return(
            <Button 
            size='sm'
            fontSize={'xm'}
            w='4'
            colorScheme={'pink'}
            disabled
            _disabled={{
                bg:'pink.500',
                cursor: 'default'
            }}
            > 
                {number}
            </Button>
            )
    }
        return(
            <Button 
            size='sm'
            fontSize={'xm'}
            w='4'
            colorScheme={'pink'}
            bgColor='gray.700'
            _hover={{
                bgColor : 'gray.500'
            }}
            > 
                {number}
            </Button>
        )
    
    
}