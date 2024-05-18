import { View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { SquareButton } from "../../../components/General/SquareButton";

export const WikiGeographyMenu = ({ route, navigation }) => {
    return (
        <View style={globalStyles.view}>
            <View style={globalStyles.column}>
                <View style={globalStyles.row}>
                    <SquareButton
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
