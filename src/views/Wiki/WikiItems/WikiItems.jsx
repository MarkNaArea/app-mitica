import { View } from "react-native";
import { LinearBackgroundColors } from "../../../constants/styleConstants";
import { LinearGradient } from "expo-linear-gradient";

export const WikiItems = ({ route, navigation }) => {
    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
        </View>
    );
};
