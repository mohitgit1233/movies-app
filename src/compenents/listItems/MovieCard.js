import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { IMAGE_URL } from '../config/api_config'
import { StyleSheet } from 'react-native'



const MovieCard = props => {
  const { image, label, popularity, relDate , id, navigation, overview} = props
  

  return (
    <Box  borderRadius='md' marginBottom={7}>
      <VStack  divider={<Divider />} space={4}>
        <Center style = {styles.centerFlex}>
        <Box>
        <Image
          source={image == null || image == undefined ? { uri: 'https://dummyimage.com/900x900/878787/ffffff&text=No+Poster+found'} : { uri: `${IMAGE_URL}${image}` }}
          alt={`${label}`}
          size="125px"
          style= {styles.imgstyle}
        />
        </Box>
        <Box style={styles.Infobox}>
          <Heading style = {styles.headin}  size="sm">{label}</Heading>
          
          <Text style = {styles.popular}>Popularity : {popularity}</Text>
          <Text>Release Date : {relDate}</Text>
          <Button 
          variant='solid' 
          backgroundColor='cyan.500'
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
          </Box>
        </Center>
        </VStack>
        </Box>
  )
}

const styles = StyleSheet.create({
  centerFlex:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    marginLeft:25
    
  },
  imgstyle:{
    marginRight:20
    
  },
  Infobox:{
    maxWidth:180,
    display:'flex',
    justifyContent:'space-evenly',
    
  }
})

export default MovieCard

