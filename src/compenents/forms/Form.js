import { Ionicons } from '@expo/vector-icons'
import { Button, FormControl, HStack,Center, Icon, Input, VStack } from 'native-base'
import { useState } from 'react'

const Form = props => {
  const { fetchResults, onInputChange } = props
  const [formData, setData] = useState({})
  const [errors, setErrors] = useState({})

 

  return (
    
    <VStack space={2}  width='100%' py={2}>
      <FormControl isRequired>
        <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
        <Center>
        <HStack width='70%' space={2}>
        
          <Input
            placeholder='i.e. James Bond, CSI'
            variant='filled'
            bg='gray.200'
            px={0}
            
            width='65%'
            alignContent='center'
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
            onChangeText={value => {
              onInputChange(value)
              setData({ ...formData, name: value })
            }}
          />
          
          
        </HStack>
        </Center>
      </FormControl>
    </VStack>
    
  )
}

export default Form
