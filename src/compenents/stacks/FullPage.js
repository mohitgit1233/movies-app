import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Center } from 'native-base'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import FullInfoMovie from '../screens/FullInfoMovie'
import MainMovieScreen from '../screens/MainMovieScreen'

const Stack = createNativeStackNavigator()

const FullPage = () => {
    
  return (
    <NavigationContainer>
         
 
      
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                name="Navigation"
                component={Navigation}
                options={{
                    title: 'Movies App',
                    headerStyle:{
                        backgroundColor: '#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
                >

                </Stack.Screen>
                <Stack.Screen
                name="FullInfoMovie"
                component={FullInfoMovie}
                options={({route})=>({
                    title:route.params.label
                })}
                >

                </Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default FullPage