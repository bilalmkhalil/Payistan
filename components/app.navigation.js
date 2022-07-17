import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signin from "../Pages/signin";
import Signup from "../Pages/signup";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="signin">
                <Screen name="Signin" component={Signin} />
                <Screen name="Signup" component={Signup} />
            </Navigator>
        </NavigationContainer>
    );
}