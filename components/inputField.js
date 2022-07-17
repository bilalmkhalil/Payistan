import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "../Style";
import { Feather } from "@expo/vector-icons";

const InputField = (props) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <View style={styles.loginInput}>
            <Feather name={props.iconName} size={21} style={styles.leftIcon} />
            <TextInput style={styles.inputField} secureTextEntry={props.password && hidePassword} 
                {...props} onChangeText={ (text)=> props.data(text, props.placeholder) } />
            { props.password &&
                <Feather name={hidePassword ? "eye" : "eye-off" } size={21} style={styles.rightIcon} 
                    onPress={()=> setHidePassword(!hidePassword)} /> } 
        </View>
    );
}

export default InputField;