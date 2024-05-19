import { Pressable, Text } from "react-native"
import { globalStyles } from "../../../styles/global"

export const SkillCard = (props) => {
    const navigation = props.navigation
    const skill = props.skill.item

    return (
        <Pressable style={[globalStyles.card]} onPress={() => navigation.navigate('Detalhes da Habilidade', { skill: skill })}>
            <Text style={globalStyles.text}>Nome da Habilidade: {skill.name}</Text>
            <Text style={globalStyles.text}>Nivel: {skill.level}</Text>
            <Text style={globalStyles.text}>Classe Primária: {skill.primary_class}</Text>
            <Text style={globalStyles.text}>Classe Secundária: {skill.secondary_class}</Text>
            <Text style={globalStyles.text}>Categoria: {skill.category}</Text>
        </Pressable>
    )
}