import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { IMAGE_URL } from '../config/api_config'


const MovieContainer = ({ navigation, route }) => {
  const { label, id,popularity,image,relDate,overview } = route.params
  return (
    <>
      <Box width='100%'>
        <Center py={10}>
        <Heading size='xl'>{label}</Heading>
        <Box>
        <Image
          source={{ uri: `${IMAGE_URL}${image}` }}
          alt={`${label}`}
          size="120px"
        />
        </Box>
        <Text>{overview}</Text>
          
          <Text>Popularity : {popularity}</Text>
          <Text>Release Date : {relDate}</Text>
        </Center>
      </Box>
    </>
  )
}

export default MovieContainer
