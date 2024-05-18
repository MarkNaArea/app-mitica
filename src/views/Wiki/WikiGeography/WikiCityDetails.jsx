import { View } from "react-native";
import { globalStyles } from "../../../styles/global";

export const WikiCityDetails = ({ route, navigation }) => {
    const city = route.params.city;

    return (
        <View style={globalStyles.view}>
            <Text style={globalStyles.text}>{city.name}</Text>
            <Text style={globalStyles.text}>{city.god}</Text>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>{city.description}</Text>
            </View>
        </View>
    );
};
