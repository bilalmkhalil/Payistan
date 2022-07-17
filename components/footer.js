import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts, Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";
import AppLoading from "expo-app-loading";

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TouchableOpacity } from "react-native-gesture-handler";


const Footer = ({foot, navigation}) => {

    let signinMsg = "Don't have an account? ";
    let signupMsg = "Already have an account? ";
    let signinTitle = "Sign In";
    let signupTitle = "Sign Up";

    let [fontsLoaded, error] = useFonts({
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={ foot == 'signin' ? styles.signinFooter : styles.signupFooter }>
            <Text style={ styles.note }>
                { foot === 'signin' ? signinMsg : signupMsg }
                { 
                foot === 'signin' ? 
                        <Text 
                            style={ styles.span } 
                            onPress={ ()=> navigation.navigate('Sign In') } > 
                                { signinTitle }
                        </Text>
                    : 
                        <Text 
                            style={ styles.span } 
                            onPress={ ()=> navigation.navigate('Sign Up')} > 
                                { signupTitle }
                        </Text> 
                }
            </Text>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    signinFooter: {
        marginTop: 70,
        padding: 10,
    },
    signupFooter: {
        marginTop: 30,
        padding: 10,
    },
    note: {
        fontFamily: 'Cairo_400Regular',
        textAlign: 'center',
        fontSize: 17
    },
    span: {
        color: '#009393',
        fontFamily: 'Cairo_600SemiBold'
    }
})