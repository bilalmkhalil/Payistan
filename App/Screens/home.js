import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";
import AppLoading from "expo-app-loading";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import axios from "axios";


const Home = () => {
    let [fontsLoaded, error] = useFonts({
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading />;
    }

    const fetchData = () => {
        axios.get("https://randomuser.me/api/?results=10")
            .then(res => {
                console.log(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <View style={styles.home}>
            <View style={styles.dashboard}>
                <View>
                    <View>
                        <Text>Bilal Khalil Khankhail</Text>
                        <Text>Date</Text>
                    </View>
                    <View>
                        <Text>Balance</Text>
                        <Text>15,000</Text>
                    </View>
                </View>
            </View>
            <View style={styles.options}>
                <View style={styles.optionsContainer}>
                    <View sytle={styles.operations}>
                        <TouchableOpacity style={styles.icon}>
                            <MaterialCommunityIcons name="bank-transfer-out" size={40}/>
                        </TouchableOpacity>
                        <Text>Send</Text>
                    </View>
                    <View sytle={styles.operations}>
                        <TouchableOpacity style={styles.icon}>
                            <MaterialIcons name="local-atm" size={40} />
                        </TouchableOpacity>
                        <Text>ATM</Text>
                    </View>
                    <View sytle={styles.operations}>
                        <TouchableOpacity style={styles.icon}>
                            <FontAwesome name="credit-card" size={31} style={styles.icon3} />
                        </TouchableOpacity>
                        <Text>Card</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.title}>Transactions</Text>

            <View style={styles.transactions}>
                <View style={styles.transactionContainer}>
                    <View style={styles.transaction}>
                        <Text>Bilal Khalil Khankhail</Text>
                        <Text>Balance</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    dashboard: {
        // flex: 1,
        backgroundColor: '#00ADAD',
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    options: {
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    operations: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: "#fff",
        backgroundColor: '#00ADAD',
        padding: 10,
        borderRadius: 50,
    },
    icon3: {
        padding: 5,
    },
    title: {
        fontSize: 35,
        fontFamily: 'Cairo_600SemiBold',

    },
    transactions: {
    }
});