import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { LinearBackgroundColors } from "../../../constants/styleConstants"
import { globalStyles } from "../../../styles/global"

export const WikiRules = ({route, navigation}) => {
    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <Text style={globalStyles.title}>Ainda não implementado</Text>
        </View>
    )
}