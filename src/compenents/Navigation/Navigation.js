import MainMovieScreen from '../screens/MainMovieScreen';
import TvShowScreen from '../screens/TvShowScreen';
import SearchScreen from '../screens/SearchScreen';
import { Header } from '../layout/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <>
   
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#2c3e50', height: 2 },
        tabBarLabelStyle: {  fontSize: 12,textTransform: 'none' },
      }}
    >
      <Tab.Screen name="Movies" component={MainMovieScreen} />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={
            { tabBarLabel: 'Search Results' }
        }
      />
      <Tab.Screen
        name="TvScreen"
        component={TvShowScreen}
        options={{ tabBarLabel: 'TV Shows' }}
      />
    </Tab.Navigator>
  </>
  );
}

export default Navigation