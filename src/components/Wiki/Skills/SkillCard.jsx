import { Text, View } from "react-native"
import { globalStyles } from "../../../styles/global"

export const SkillCard = (props) => {
    const navigation = props.navigation
    const skill = props.skill.item

    console.log(props)

    return (
        <View style={[globalStyles.card, {margin: 0}]}>
            <Text style={globalStyles.text}>Nome da Habilidade: {skill.skillname}</Text>
            <Text style={globalStyles.text}>Nivel: {skill.level}</Text>
            <Text style={globalStyles.text}>Classe: {skill.class}</Text>
            <Text style={globalStyles.text}>Tipo: {skill.type}</Text>
        </View>
    )
}