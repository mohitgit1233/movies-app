import React from 'react'
import { CheckIcon, Icon, Select } from 'native-base';
import { Box, Button, Center, Divider, Heading, Image, VStack } from 'native-base'
import Load from '../layout/Load';
import { useEffect, useState } from 'react';
import {api_call} from '../config/api_call'
import TvList from '../lists/TvList'


const TvShowScreen = ({navigation}) =>{

  const[tv,setTv] = useState([])
  const[filter,setFilter] = useState("popular")
  const [isLoading,setIsLoading] = useState(false)

  const fetchShows = async () =>{
    setIsLoading(true)
    const response = await api_call(filter,"tv");
    console.log(response)
    setTv(response.results)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchShows()
  },[filter]);
  return(
<>
<Center>
    <Box maxW="300">
    <Select selectedValue={filter} minWidth="200" 
      marginBottom="7" 
      marginTop="7" 
      fontSize="sm"
      accessibilityLabel="Choose Service"  
      _selectedItem={{
        _text: { color: 'white',fontWeight:"semibold" },
      bg: "teal.600",
      endIcon: <CheckIcon size="7" color="white" />
    }} mt={1} onValueChange={Value => {
      setFilter(Value)
    }}>
        <Select.Item label="airing_today" value="airing_today" />
        <Select.Item label="on_the_air" value="on_the_air" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
      </Select>
    </Box>
  </Center>
  
  {isLoading ? <Load/> :<TvList shows = {tv} navigation = {navigation}/>}  
    </>
  )
} 

export default TvShowScreen