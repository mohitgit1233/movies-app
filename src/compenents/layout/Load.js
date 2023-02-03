import React from 'react'
import { Box, Button, Center, Divider, Heading, Image, Text, VStack ,Spinner,View} from 'native-base'
import { StyleSheet } from 'react-native';

const Load = () => {
  return (
    <View style={styles.container}>
  <Spinner
    accessibilityLabel="loading content"
    size="large"
    color="#000"
    animating={true}
  />
  <Text style={styles.text}>Loading   </Text>
</View> 
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row-reverse'
  },
  text: {
    fontSize: 20,
    marginTop: 15,
    
  },
});

export default Load