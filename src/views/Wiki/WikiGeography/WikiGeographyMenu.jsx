import { View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { SquareButton } from "../../../components/General/SquareButton";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

export const WikiGeographyMenu = ({ route, navigation }) => {
    return (
        <View style={[globalStyles.view, {alignItems: 'center'}]}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.column}>
                <View style={globalStyles.row}>
                    <SquareButton
                        buttonIcon={require("../../../assets/icons/menu/way.png")}
                        buttonText="Cidades"
                        onPress={() =>
                            navigation.navigate("Wiki Lista Cidades")
                        }
                    />
                </View>
            </View>
        </View>
    );
};
