import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./button";

const Numpad = (props) => {
    const numberHandler = (data) => {
        console.log(data)
    }

    return (
        <View style={styles.numpad}>
            <View style={styles.display}>
                <Text style={styles.displayText}>Rs 1,200</Text>
            </View>

            <View style={styles.numpadContainer}>
                <View style={styles.numRows}>
                    <Button text="1" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("1")}/>
                    <Button text="2" numContainer={styles.numContainer} number={styles.number} />
                    <Button text="3" numContainer={styles.numContainer} number={styles.number} />
                </View>
                <View style={styles.numRows}>
                    <Button text="4" numContainer={styles.numContainer} number={styles.number} />
                    <Button text="5" numContainer={styles.numContainer} number={styles.number} />
                    <Button text="6" numContainer={styles.numContainer} number={styles.number} />
                </View>
                <View style={styles.numRows}>
                    <Button text="7" numContainer={styles.numContainer} number={styles.number} />
                    <Button text="8" numContainer={styles.numContainer} number={styles.number} />
                    <Button text="9" numContainer={styles.numContainer} number={styles.number} />
                </View>
                <View style={styles.numRows}>
                    <TouchableOpacity style={styles.numContainer}>
                        <Text style={styles.number}>   </Text>
                    </TouchableOpacity>
                    <Button text="0" numContainer={styles.numContainer} number={styles.number} />
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
    display: {
        height: 200,
        backgroundColor: "#fff",
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    displayText: {
        fontSize: 30,
    },

    numpad: {
        backgroundColor: "#000",
        // flex: 1,
        // height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    numpadContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginVertical: 20
    },

    numRows: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    backspace: {
        color: "#fff",
        fontSize: 35,
        marginTop: 6
    },

    numContainer: {
        padding: 12,
        backgroundColor: "#00AeAe",
        borderRadius: 10,
    },

    number: {
        color: "#fff",
        fontSize: 38,
        fontWeight: "bold",
    }
});