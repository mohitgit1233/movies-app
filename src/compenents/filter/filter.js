import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { CheckIcon, Icon, Select } from 'native-base';
// import { GET_MOVIES_REQUEST_TYPES } from '../../const';


const Filters = () =>{
  const [service, setService] = React.useState("popular");

  return (
    <Center>
    <Box maxW="300">
      <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service"  _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }} mt={1} onValueChange={itemValue => {
      setService(itemValue)

    }}>
        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </Box>
  </Center>
  )
}



export default Filters
