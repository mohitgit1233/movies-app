import React from 'react'
import MoviesList from '../lists/MoviesList'
import { useEffect, useState } from 'react';
import {API_KEY} from '../config/api_config';
import {api_call} from '../config/api_call'
import { CheckIcon, Icon, Select } from 'native-base';
import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'


const MainMovieScreen = ({navigation}) =>{

  const[movies,setMovies] = useState([])
  const [filter, setFilter] = React.useState("popular");
  const[type,setType] = useState("movie")

  const fetchMovies = async () =>{
   
    const response = await api_call(filter,type);
     
    setMovies(response.results)

  }

  useEffect(() => {
    fetchMovies()
  },[filter]);
  return(
    <>
        <Center>
    <Box maxW="300">
      <Select selectedValue={filter} minWidth="200" accessibilityLabel="Choose Service"  _selectedItem={{
      bg: "teal.600",
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
  <MoviesList movies = {movies} navigation = {navigation}/>
  </>
  )
} 


export default MainMovieScreen