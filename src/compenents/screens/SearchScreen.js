import React, { useEffect, useState } from 'react'
import MoviesList from '../lists/MoviesList'
import TvList from '../lists/TvList'
import { Box, Button, Center, Divider, Heading, Image, Text,CheckIcon, VStack,Icon,Select, FormControl } from 'native-base'
import Form from '../forms/Form'
import { Ionicons } from '@expo/vector-icons'
import Filters from '../filter/filter'
import {api_call_search} from '../config/api_call'
import Load from '../layout/Load'



const SearchScreen = ({navigation}) => {

    const[result,setResult] = useState([])
    const [isIdle,setIsIdle] = useState(true)
    const [isLoading,setIsLoading] = useState(false)
    const [searchWord,setSearchWord] = useState('')
    const [selectedValue, setSelectedValue] = useState('multi');
    const [isEmpty,setIsEmpty] = useState(false)
    
    
    const fetchStuff = async () =>{
        setIsLoading(true)
        setIsIdle(false)
        const response = await api_call_search(searchWord,selectedValue);
         
        setResult(response.results)
console.log(response)
        setIsLoading(false)
      }
    const HandleChange = searchWord =>{
        setSearchWord(searchWord)
    }
  
    const onSubmit = () => {
        console.log('form submitted')
        console.log(searchWord.length)
        {searchWord.length > 0 ? <>
        {fetchStuff()}
        {setIsEmpty(false)}
        </>
        
         : setIsEmpty(true)}
    
      }

  return (
      
      <>
      <Form onInputChange={HandleChange}  />
      {isEmpty ? <Text color= 'red.600'>Please Enter a value</Text>:<></>}
     
      <Center>
      
    <Box marginBottom='10' >
    <FormControl isRequired>
    <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
    </FormControl>

    <Box display="flex" flexDirection="row">
    
      <Select selectedValue={selectedValue} minWidth="180" height='10' accessibilityLabel="Choose Service"  _selectedItem={{
      endIcon: <CheckIcon size="5" />,
      bg: "teal.600"}} onValueChange={Value => {

        setSelectedValue(Value)
    }}>
        <Select.Item label="movie" value="movie" />
        <Select.Item label="multi" value="multi" />
        <Select.Item label="tv" value="tv" />
       
      </Select>
      
      <Button height='10' onPress={onSubmit}  startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
          </Box>
    </Box>
  </Center>
      
      
     {isIdle ? <>
     <Text fontSize={30} fontWeight={600} display='flex' textAlign={1} justifyContent="center">Please initiate a search</Text></> :<>
     {isLoading ? <Load/> :
     <>
     {result.length > 0 ?<>
     {console.log("selectedValue",selectedValue)}
     {selectedValue == 'tv' ? <TvList shows={result} navigation={navigation}/> :<MoviesList movies={result} navigation={navigation}/>}
        
        </>
        : <Text>Oops! No results found</Text>
     }
     </>}
     </>
     }
     

     
      </>
    
  )
}

export default SearchScreen