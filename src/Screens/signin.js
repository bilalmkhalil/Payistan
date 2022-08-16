import { React } from "react";
import { View, Text, StatusBar, TouchableOpacity, Button} from "react-native";
import { styles } from '../../Style';
import Header from "../../components/header";
import Footer from "../../components/footer";
import InputField from "../../components/inputField";
import axios from "axios";


const Signin = ({ navigation }) => {
    let data = {
        email: "",
        password: ""
    };
    
    const getData = (input, type) => {
        if (type === "Password") {
            data.password = input;
        } else {
            data.email = input;
        }
    };

    const loginHandler = (payload) => {
        const url = "http://35.89.53.224:3333/api/users/login";
        console.log(payload);

        axios.post(url, payload)
            .then(res => {
                const result = res.data;
                if (result.message === "login successfully") {
                    navigation.navigate("Home");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <View style={styles.authContainer} >
            <Header head="signin" />
            <InputField iconName="at-sign" placeholder="Username" data={getData}/>
            <InputField iconName="lock" placeholder="Password" password data={getData}/>

            <TouchableOpacity style={styles.loginButton} onPress={() => loginHandler(data) } >
                <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>

            <Footer foot="signup" navigation={navigation}/>
            <StatusBar hidden /> 
        </View>
    );
}

export default Signin;