import React from 'react';

// import { enableScreens } from 'react-native-screens';
// enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from './src/Screens/signin';
import Signup from './src/Screens/signup';
import Transaction from './src/Screens/transaction';
import Home from './src/Screens/home';

const Stacks = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer intialRouteName="Sign In">
      <Stacks.Navigator>
        {/* <Stacks.Screen name="Home" component={Home} options={{headerShown: false}} /> */}
        {/* <Stacks.Screen name="Transaction" component={Transaction} options={{headerShown: false}} /> */}
        <Stacks.Screen name="Sign In" component={Signin} options={{headerShown: false}} />
        <Stacks.Screen name="Sign Up" component={Signup} options={{headerShown: false}} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

export default App;