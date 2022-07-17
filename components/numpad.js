import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Numpad = () => {
    return (
        <View style={styles.numpad}>
            <View style={styles.numpadContainer}>
                <View style={styles.numRows}>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numRows}>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numRows}>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.numRows}>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>   </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numContainer}>
                        <Ionicons name="ios-backspace" style={styles.backspace} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Numpad;

const styles = StyleSheet.create({
    numpad: {
        // flex: 1,
        height: '40%',
        backgroundColor: "#00ADAD"
    },

    numpadContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginVertical: 20
    },

    numRows: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    backspace: {
        color: "#fff",
        fontSize: 35,
        marginTop: 6
    },

    numContainer: {
        padding: 15
    },

    number: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
    }
});