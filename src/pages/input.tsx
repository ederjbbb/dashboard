import { Input as InputChakra, FormLabel, InputProps as InputPropsChakra, Box, FormControl, FormErrorMessage, } from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction} from 'react';
import {FieldError} from 'react-hook-form'

interface InputProps extends InputPropsChakra{
    name: string
    label?: string
    error? : FieldError
}

  const  InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps > = ( {name,error =null ,label  ,...rest}, ref) => {
    return(
        <FormControl isInvalid={!!error} >

        {!!label &&  <FormLabel htmlFor={name}>{label}</FormLabel>}


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
          ref={ref}
          {...rest}
          />
         {!!error && (
             <FormErrorMessage>
                 {error.message}
             </FormErrorMessage>
         )}
        </FormControl>
        
        
       
    )
} 

export const Input = forwardRef(InputBase);