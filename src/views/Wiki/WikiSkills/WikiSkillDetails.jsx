import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";

export const WikiSkillDetails = ({ route, navigation }) => {
    const skill = route.params.skill;

    console.log(skill);

    return (
        <ScrollView style={globalStyles.view}>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>
                    Nome da Habilidade: {skill.skillname}
                </Text>
                <Text style={globalStyles.text}>Nivel: {skill.level}</Text>
                <Text style={globalStyles.text}>Classe: {skill.class}</Text>
                <Text style={globalStyles.text}>Tipo: {skill.type}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>Dano: {skill.damage}</Text>
                <Text style={globalStyles.text}>Elemento: {skill.elements}</Text>
                <Text style={globalStyles.text}>Area: {skill.area}</Text>
                <Text style={globalStyles.text}>Alcance: {skill.range}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>Descrição: {skill.description}</Text>
            </View>
        </ScrollView>
    );
};
