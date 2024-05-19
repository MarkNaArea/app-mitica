import { View, Text } from "react-native";
import { globalStyles } from "../../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

export const WikiCityDetails = ({ route, navigation }) => {
    const city = route.params.city;

    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Nome da Cidade: {city.name}
                </Text>
                <Text style={globalStyles.text}>
                    Grupo de Deuses da Cidade: {city.god}
                </Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>{city.description}</Text>
            </View>
        </View>
    );
};
