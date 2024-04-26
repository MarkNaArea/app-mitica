import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";

export const WikiSkillDetails = ({ route, navigation }) => {
    const skill = route.params.skill;

    console.log(skill);

    return (
        <ScrollView style={globalStyles.view}>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Nome da Habilidade: {skill.name}
                </Text>
                <Text style={globalStyles.text}>Nivel: {skill.level}</Text>
                <Text style={globalStyles.text}>
                    Categoria: {skill.category}
                </Text>
                <Text style={globalStyles.text}>Elemento: {skill.element}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>Area: {skill.area}</Text>
                <Text style={globalStyles.text}>Alcance: {skill.range}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Dano: {skill.primary_class}
                </Text>
                <Text style={globalStyles.text}>
                    Elemento: {skill.primary_damage}
                </Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Dano: {skill.secondary_class}
                </Text>
                <Text style={globalStyles.text}>
                    Elemento: {skill.secondary_damage}
                </Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Descrição: {skill.description}
                </Text>
            </View>
        </ScrollView>
    );
};
