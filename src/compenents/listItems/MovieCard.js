import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { IMAGE_URL } from '../config/api_config'


const MovieCard = props => {
  const { image, label, popularity, relDate , id, navigation, overview} = props

  return (
    <Box borderWidth={1} borderRadius='md' pb={5} mb={10}>
      <VStack space={4} divider={<Divider />}>
        <Center>
        <Box>
        <Image
          source={{ uri: `${IMAGE_URL}${image}` }}
          alt={`${label}`}
          size="120px"
        />
        </Box>
          <Heading size='xs'>{label}</Heading>
          
          <Text>Popularity : {popularity}</Text>
          <Text>Release Date : {relDate}</Text>
          <Button 
          variant='solid' 
          backgroundColor='teal.600'
          onPress={() => {
            navigation.navigate('FullInfoMovie', {
              label,
              id,
              image,
              popularity,
              overview,
              relDate
            })
            
          }}
          >More Details</Button>
        </Center>
        </VStack>
        </Box>
  )
}

export default MovieCard
