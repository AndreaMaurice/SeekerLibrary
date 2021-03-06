import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Search from './pages/Search';
import Collection from './pages/Collection';
import Notes from './pages/Notes';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

let customFonts = {
   'Poppins-Bold': 'https://github.com/AndreaMaurice/SeekerStorage/raw/main/Poppins-Bold.ttf',
   'Poppins-Regular': 'https://github.com/AndreaMaurice/SeekerStorage/raw/main/Poppins-Regular.ttf',
   'Major-Mono': 'https://github.com/googlefonts/majormono/raw/master/fonts/MajorMonoDisplay-Regular.ttf',
};

const Stack = createStackNavigator();



class App extends Component {
   constructor() {
      super()
      this.state = {
      fontsLoaded: false,
      }
   }
   async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
   }

  componentDidMount() {
    this._loadFontsAsync();
  }


   render() {
      if (!this.state.fontsLoaded) {
      return <AppLoading />;
      }
      return (
         <NavigationContainer> 
            <Stack.Navigator initialRouteName="Login">
            <Stack.Group screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
               </Stack.Group>
               <Stack.Group screenOptions={{headerShown: false}}>
                  <Stack.Screen name="HomeScreen" component={Home} />
                  <Stack.Screen name="Settings" component={Settings} />
                  <Stack.Screen name="Search" component={Search} />
                  <Stack.Screen name="Collection" component={Collection} />
                  <Stack.Screen name="Notes" component={Notes} />
               </Stack.Group>
            </Stack.Navigator>
         </NavigationContainer>
      );
   }
}
export default App;