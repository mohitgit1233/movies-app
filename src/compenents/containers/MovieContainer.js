import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { IMAGE_URL } from '../config/api_config'
import { useEffect } from 'react';
import { useState } from 'react';
import { api_call_single } from '../config/api_call'



const MovieContainer = ({ navigation, route }) => {
  const { type, id } = route.params
  // let ress = {}
  const [keepdata, setKeepData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const fetchIt = async () =>{
    
    const response = await api_call_single(id,type);
  
    setKeepData(response)
    
    setIsLoading(true)
  }
  

  useEffect(() => {
    
      fetchIt()
    
  },[isLoading]);

  return (
    <>
      <Box width='100%' maxWidth='300' margin='auto' flex='10'  >
        <Center paddingY={10}>
          {type == 'tv' ? <Heading size="lg" marginBottom='10'>{keepdata.original_name}</Heading>
          : <Heading size="lg" marginBottom='10'>{keepdata.original_title}</Heading>}
        <Box>
        <Image
        source={keepdata.poster_path == null || keepdata.poster_path == undefined ? { uri: 'https://dummyimage.com/900x900/878787/ffffff&text=No+Poster+found'} : { uri: `${IMAGE_URL}${keepdata.poster_path}` }}
          alt={`${keepdata.original_title}`}
          size="250px"
          marginBottom='6'
        />
        </Box>
        <Text marginBottom='6' >{keepdata.overview}</Text>
          
          <Text fontSize="xs">Popularity : {keepdata.popularity} |{type == 'tv' ?<> Release Date : {keepdata.first_air_date}</> : <>Release Date : {keepdata.release_date}</>}</Text>
          
        </Center>
      </Box>
    </>
  )
}

export default MovieContainer
