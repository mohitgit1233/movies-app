import React from 'react'
import { StyleSheet } from 'react-native';
import MoviesList from '../lists/MoviesList'
import { useEffect, useState } from 'react';
import {API_KEY} from '../config/api_config';
import {api_call} from '../config/api_call'
import { CheckIcon, Icon, Select } from 'native-base';
import { Box, Button, Center, Divider, Heading, Image, Text, VStack ,Spinner,View} from 'native-base'
import Load from '../layout/Load';

const MainMovieScreen = ({navigation}) =>{

  const[movies,setMovies] = useState([])
  const [filter, setFilter] = React.useState("popular");
  const[type,setType] = useState("movie")
  const [isLoading,setIsLoading] = useState(false)

  const fetchMovies = async () =>{
    setIsLoading(true)
    const response = await api_call(filter,type);
     
    setMovies(response.results)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  },[filter]);
  return(
    <>
        <Center>
    <Box maxW="300">
      <Select selectedValue={filter} minWidth="200" marginBottom="7" marginTop="7" accessibilityLabel="Choose Service"  _selectedItem={{
    
      bg: "teal.500",
      endIcon: <CheckIcon size="5" />
    }} mt={1} onValueChange={Value => {
      setFilter(Value)
    }}>
        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </Box>
  </Center>
  {isLoading ? <Load/>: <MoviesList movies = {movies} navigation = {navigation}/>
  }
  
  </>
  )
} 





export default MainMovieScreen