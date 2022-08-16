import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/button";

const Transaction = (props) => {
    const [currentAmount, setCurrentAmount] = useState(1200);
    const [amount, setAmount] = useState("");
    const numberHandler = (data) => {
        if (amount.length < 5) {
            setAmount(amount + data);
        }
    }
    const backspaceHandler = () => {
        setAmount(amount.slice(0, -1));
    }

    const display = () => {
        if(parseInt(amount) > currentAmount) {
            return (
                <View style={styles.amountDisplay}>
                    <Text style={styles.amountDisplayText}>Rs. {amount}</Text>
                    <Text style={styles.warning}>Insufficient Balance</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.amountDisplay}>
                    <Text style={styles.amountDisplayText}>Rs. {amount}</Text>
                </View>
            );
        }
    }

    return (
        <SafeAreaView style={styles.transaction}>
            <View style={styles.firPortion}>
                <View style={styles.currentDisplay}>
                    <Text style={styles.currentDisplayTextTitle}>Current Balance</Text>
                    <Text style={styles.currentDisplayText}>Rs. {currentAmount}</Text>
                </View>
                {display()}
            </View>

            <View style={styles.secPortion}>
                <View style={styles.numpad}>
                    <View style={styles.numpadContainer}>
                        <View style={styles.numRows}>
                            <Button text="1" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("1")}/>
                            <Button text="2" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("2")} />
                            <Button text="3" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("3")} />
                        </View>
                        <View style={styles.numRows}>
                            <Button text="4" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("4")} />
                            <Button text="5" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("5")} />
                            <Button text="6" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("6")} />
                        </View>
                        <View style={styles.numRows}>
                            <Button text="7" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("7")} />
                            <Button text="8" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("8")} />
                            <Button text="9" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("9")} />
                        </View>
                        <View style={styles.numRows}>
                            <TouchableOpacity style={styles.numContainer}>
                                <Text style={styles.number}>.</Text>
                            </TouchableOpacity>
                            <Button text="0" numContainer={styles.numContainer} number={styles.number} onPress={() => numberHandler("0")} />
                            <TouchableOpacity style={styles.numContainer} onPress={backspaceHandler}>
                                <Ionicons name="ios-backspace" style={styles.backspace} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.sendButtonContainer}>
                    <TouchableOpacity style={styles.sendButton}>
                        <Text style={styles.sendButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Transaction;

const styles = StyleSheet.create({
    transaction: {
        flex: 1,
        backgroundColor: "#000"
    },

    currentDisplay: {
        // backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%"
    },
    currentDisplayTextTitle: {
        fontSize: 20,
        color: "#fff",
        // fontWeight: "bold"
    },
    currentDisplayText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5
    },

    amountDisplay: {
        width: "100%",
        // height: "%",
        // backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30%"
    },
    amountDisplayText: {
        color: "#fff",
        fontSize: 45,
        fontWeight: "bold"
    },
    warning: {
        color: "#ff0000",
        fontSize: 17,
    },

    firPortion: {
        width: "100%",
        position: "absolute",
        top: 0
    },

    secPortion: {
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    numpad: {
        // position: "absolute",
        // bottom: 0,
    },
    numpadContainer: {
        // width: "100%",
        // backgroundColor: "#000",
        flexDirection: "column",
        justifyContent: "space-around",
        // marginVertical: 20
    },
    numRows: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 25,
        marginTop: 25
    },
    backspace: {
        color: "#fff",
        fontSize: 35,
        marginTop: 6
    },
    numContainer: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 100,
        
        justifyContent: "center",
        alignItems: "center"
    },
    number: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
    },

    sendButtonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25

    },
    sendButton: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 10,
    },
    sendButtonText: {
        textAlign: "center",
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    }
});