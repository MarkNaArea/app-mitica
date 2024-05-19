import { View } from "react-native"
import { LinearBackgroundColors } from "../../../constants/styleConstants"
import { LinearGradient } from "expo-linear-gradient"
import { globalStyles } from "../../../styles/global"

export const CharacterInvite = ({route, navigation}) => {

    const fetchInvites = (userid) => {
        
    }

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