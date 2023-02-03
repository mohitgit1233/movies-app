import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { IMAGE_URL } from '../config/api_config'


const MovieContainer = ({ navigation, route }) => {
  const { label, id,popularity,image,relDate,overview } = route.params
  return (
    <>
      <Box width='100%' maxWidth='300' margin='auto' flex='10'  >
        <Center paddingY={10}>
        <Heading size="lg" marginBottom='10'>{label}</Heading>
        <Box>
        <Image
          source={{ uri: `${IMAGE_URL}${image}` }}
          alt={`${label}`}
          size="250px"
          marginBottom='6'
        />
        </Box>
        <Text marginBottom='6' >{overview}</Text>
          
          <Text fontSize="xs">Popularity : {popularity} | Release Date : {relDate}</Text>
          
        </Center>
      </Box>
    </>
  )
}

export default MovieContainer
