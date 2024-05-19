import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";
import { globalStyles } from "../../../styles/global";
import { ScrollView, Text, View } from "react-native";

export const WikiClassDetail = ({ route, navigation }) => {
    const wikiclass = route.params.class;

    return (
        <ScrollView style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Nome da Classe: {wikiclass.class}
                </Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Descrição: {wikiclass.description}
                </Text>
            </View>
            {wikiclass.mechanic_1 && (
                <View style={globalStyles.card}>
                    <Text style={globalStyles.text}>
                        Mecânica 1: {wikiclass.mechanic_1}
                    </Text>
                </View>
            )}
            {wikiclass.mechanic_2 && (
                <View style={globalStyles.card}>
                    <Text style={globalStyles.text}>
                        Mecânica 2: {wikiclass.mechanic_2}
                    </Text>
                </View>
            )}
            {wikiclass.mechanic_3 && (
                <View style={globalStyles.card}>
                    <Text style={globalStyles.text}>
                        Mecânica 3: {wikiclass.mechanic_3}
                    </Text>
                </View>
            )}
            {wikiclass.mechanic_4 && (
                <View style={globalStyles.card}>
                    <Text style={globalStyles.text}>
                        Mecânica 4: {wikiclass.mechanic_4}
                    </Text>
                </View>
            )}
        </ScrollView>
    );
};
