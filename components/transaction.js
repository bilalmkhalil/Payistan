import { View, Text } from 'react-native';
import { styles } from '../Style';

export default function Transaction() {
    return (
        <View style={styles.transContainer}>
            <View>
                <Text>Netflix Payment</Text>
                <Text>22-12-2022</Text>
            </View>
            <Text>PKR -1100</Text>
        </View>
    );
}