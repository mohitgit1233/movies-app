import React, { useEffect, useState } from 'react'
import MoviesList from '../lists/MoviesList'
import { Box, Button, Center, Divider, Heading, Image, Text,CheckIcon, VStack,Icon,Select } from 'native-base'
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
    <Box maxW="300">
      <Select selectedValue={selectedValue} minWidth="200" accessibilityLabel="Choose Service"  _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }} mt={1} onValueChange={Value => {
        setSelectedValue(Value)
    }}>
        <Select.Item label="movie" value="movie" />
        <Select.Item label="multi" value="multi" />
        <Select.Item label="tv" value="tv" />
       
      </Select>
    </Box>
  </Center>
      <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
            Search
          </Button>
      
     {isIdle ? <>
     <Text >Please initiate a search</Text></> :<>
     {isLoading ? <Load/> :
     <>
     {result.length > 0 ?
        <MoviesList movies={result} navigation={navigation}/>
        : <Text>Oops! No results found</Text>
     }
     </>}
     </>
     }
     

     
      </>
    
  )
}

export default SearchScreen