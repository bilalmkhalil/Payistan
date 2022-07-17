import {View, Text} from "react-native";
import Numpad from "../../components/numpad";
import VirtualKeyboard from "../../components/virtualKeyboard";

const Amount = () => {
    return (
        <view>
            <Text>Amount</Text>
            <VirtualKeyboard />
        </view>
    );
}

export default Amount;