import React, { useEffect, useState } from 'react'
import MoviesList from '../lists/MoviesList'
import { Box, Button, Center, Divider, Heading, Image, Text,CheckIcon, VStack,Icon,Select } from 'native-base'
import Form from '../forms/Form'
import { Ionicons } from '@expo/vector-icons'
import Filters from '../filter/filter'
import {api_call_search} from '../config/api_call'



const SearchScreen = ({navigation}) => {

    const[result,setResult] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [searchWord,setSearchWord] = useState('')
    const [selectedValue, setSelectedValue] = useState('multi');
    
    
    const fetchStuff = async () =>{
   
        const response = await api_call_search(searchWord,selectedValue);
         console.log(response)
        setResult(response.results)
        setIsLoading(false)
    
      }
    const HandleChange = searchWord =>{
        setSearchWord(searchWord)
    }
  
    const onSubmit = () => {
        console.log('form submitted')
        fetchStuff()
    
      }

  return (
      
      <>
      <Form onInputChange={HandleChange}  />
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
      
     {isLoading ? <>
     <Text >Please initiate a search</Text></> :<>
        <MoviesList movies={result} navigation={navigation}/>
   
     </>}
     

     
      </>
    
  )
}

export default SearchScreen