import React from "react";
import axios from "axios";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "../../Style";
import Header from "../../components/header";
import Footer from "../../components/footer";
import InputField from "../../components/inputField";

const Signup = ({ navigation }) => {
    let data = {
        userid: "",
        name: "",
        email: "",
        phone: "",
        password: ""
    };

    let optional = {
        password: "",
    }

    const getData = (input, type) => {
        if (type === "Full Name") {
            data.name = input;
        } else if (type === "Email") {
            data.email = input;
        } else if (type === "Phone") {
            data.phone = input;
        } else if (type === "Password") {
            data.password = input;
        } else{
            optional.password = input;
        }
    };

    const signupHandler = (payload) => {
        const url = "http://35.89.53.224:3333/api/users";
        const getuser = "http://35.89.53.224:3333/api/users/getlastuser";
        // console.log(optional);
        
        axios.get(getuser)
        .then( res => {
            const result = res.data;
            const userid = Object.values(result.data[0])[0];
            payload.userid = userid + 1;
        })
        .catch( err => {
            console.log(err);
        });
        
        console.log(payload);

        if (!payload.password.localeCompare(optional.password)) {
            alert("success");
            axios.post(url, payload)
                .then(res => {
                    const result = res.data;
                    navigation.navigate("Home");
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            alert("Please input same passwords.")
        }
    }
    
    return (
        <View style={styles.authContainer}>
            <Header title="SIGN UP" msg="Fill out details to Sign Up." />
            <InputField iconName="user" placeholder="Full Name" data={getData}/>
            <InputField iconName="at-sign" placeholder="Email" data={getData}/>
            <InputField iconName="smartphone" placeholder="Phone" data={getData}/>
            <InputField iconName="lock" placeholder="Password" password data={getData}/>
            <InputField iconName="lock" placeholder="Confirm Password" password data={getData}/>
            
            <TouchableOpacity style={styles.loginButton} onPress={() => signupHandler(data) }>
                <Text style={styles.loginButtonText} >Sign Up</Text>
            </TouchableOpacity>

            <Footer foot="signin" navigation={navigation} />
            <StatusBar hidden /> 
        </View>
    );
}

export default Signup;