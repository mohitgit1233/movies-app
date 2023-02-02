import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Box, Button, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import { CheckIcon, Icon, Select } from 'native-base';



const Filters = props =>{
 const {selectedValue,setSelectedValue} = props

  return (
    <Center>
    <Box maxW="300">
      <Select  minWidth="200" accessibilityLabel="Choose Service"  _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" onValueChange={(itemValue) => setSelectedValue(itemValue)}/>
    }} mt={1} >
        <Select.Item label="movie" value="movie" />
        <Select.Item label="multi" value="multi" />
        <Select.Item label="tv" value="tv" />
        
      </Select>
    </Box>
  </Center>
  )
}



export default Filters
