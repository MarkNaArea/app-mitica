import { View } from "react-native";
import { LinearBackgroundColors } from "../../../constants/styleConstants";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../../styles/global";

export const WikiItems = ({ route, navigation }) => {
    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
        </View>
    );
};
