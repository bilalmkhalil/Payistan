import { View, Text, TouchableOpacity } from "react-native";


const Button = (props) => {
    return (
        <TouchableOpacity style={props.numContainer} onPress={props.onPress}>
            <Text style={props.number}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Button;