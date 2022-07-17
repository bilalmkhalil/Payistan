import React from "react";
import axios from "axios";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "../../Style";
import Header from "../../components/header";
import Footer from "../../components/footer";
import InputField from "../../components/inputField";

const Signup = ({ navigation }) => {
    let data = {
        name: "",
        email: "",
        phone: "",
        password: ""
    };
    
    return (
        <View style={styles.authContainer}>
            <Header title="SIGN UP" msg="Fill out details to Sign Up." />
            <InputField iconName="user" placeholder="Full Name"/>
            <InputField iconName="at-sign" placeholder="Email"/>
            <InputField iconName="at-sign" placeholder="Phone"/>
            <InputField iconName="lock" placeholder="Password" password/>
            <InputField iconName="lock" placeholder="Confirm Password" password/>
            
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <Footer foot="signin" navigation={navigation} />
            <StatusBar hidden /> 
        </View>
    );
}

export default Signup;