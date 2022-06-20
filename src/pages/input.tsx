import { Flex, Input as InputChakra, FormLabel, InputProps as InputPropsChakra, Box} from "@chakra-ui/react";

interface InputProps extends InputPropsChakra{
    name: string
    
    label: string
}

export  function Input( {name,label, ...rest}: InputProps){
    return(
        <Box>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <InputChakra 
        name={name} 
        id={label} 
        
        focusBorderColor="pink.500" 
        bgColor='gray.900' variant='filled' 
        hover={{
            bgColor:'gray.900'
          }}
          size='lg'
          placeholder={label}
          
          {...rest}
          />
        </Box>
        
        
       
    )
} 