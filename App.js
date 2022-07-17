import React from 'react';

// import { enableScreens } from 'react-native-screens';
// enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from './App/Screens/signin';
import Signup from './App/Screens/signup';
// import Amount from './App/Screens/amount';
import Home from './App/Screens/home';

const Stacks = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer intialRouteName="Sign In">
      <Stacks.Navigator>
        <Stacks.Screen name="Sign In" component={Signin} options={{headerShown: false}} />
        <Stacks.Screen name="Sign Up" component={Signup} options={{headerShown: false}} />
        <Stacks.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

export default App;