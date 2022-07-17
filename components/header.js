import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";
import AppLoading from "expo-app-loading";

const Header = (props) => {
    let [fontsLoaded, error] = useFonts({
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={ styles.header }>
            <Text style={props.head == 'signin' ? styles.signinLogo : styles.signupLogo}> Pay<Text style={styles.span}>istan.</Text></Text>
            <Text style={styles.subTitle} >{props.title}</Text>
            <Text style={styles.text}>{props.msg}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 10
    },
    signinLogo: {
        color: '#009393',
        fontFamily: 'Cairo_700Bold',
        fontSize: 45,
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 50,
    },
    signupLogo: {
        color: '#009393',
        fontFamily: 'Cairo_700Bold',
        fontSize: 45,
        textAlign: 'center',
        paddingTop: 50,
    },
    span: {
        color: '#000',
        fontFamily: 'Cairo_400Regular',
    },
    subTitle: {
        fontFamily: 'Cairo_600SemiBold',
        fontSize: 35,
        marginTop: 30,
        marginBottom: 0,
        paddingBottom: 0
    },
    text: {
        color: 'red',
        fontSize: 16,
        fontFamily: 'Cairo_400Regular',
        marginTop: 0,
        paddingTop: 0,
    }
});