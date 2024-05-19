import { LinearGradient } from "expo-linear-gradient"
import { View } from "react-native"
import { LinearBackgroundColors } from "../../../constants/styleConstants"

export const WikiRules = ({route, navigation}) => {
    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />

        </View>
    )
}