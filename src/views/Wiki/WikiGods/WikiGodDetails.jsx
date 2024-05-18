import { Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";

export const WikiGodDetails = ({ route, navigation }) => {
    const god = route.params.god;

    return (
        <View style={[globalStyles.view]}>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>Nome do Deus: {god.name}</Text>
                <Text style={globalStyles.text}>Elemento: {god.god_type}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Descrição: {god.description}
                </Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Habilidade Caracteristica: {god.characteristic_skill_name}
                </Text>
                <Text style={globalStyles.text}>
                    {god.characteristic_skill}
                </Text>
            </View>
        </View>
    );
};
