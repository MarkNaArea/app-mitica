import { Pressable, Text } from "react-native"
import { globalStyles } from "../../../styles/global"

export const SkillCard = (props) => {
    const navigation = props.navigation
    const skill = props.skill.item

    return (
        <Pressable style={[globalStyles.card, {margin: 0}]} onPress={() => navigation.navigate('Detalhes da Habilidade', { skill: skill })}>
            <Text style={globalStyles.text}>Nome da Habilidade: {skill.skillname}</Text>
            <Text style={globalStyles.text}>Nivel: {skill.level}</Text>
            <Text style={globalStyles.text}>Classe: {skill.class}</Text>
            <Text style={globalStyles.text}>Tipo: {skill.type}</Text>
        </Pressable>
    )
}