import { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { globalStyles } from "../../../styles/global"
import { LinearGradient } from "expo-linear-gradient"
import { LinearBackgroundColors } from "../../../constants/styleConstants"

export const CharacterMenu = ({route, navigation}) => {
    console.log(route.params.character)
    const [character, setCharacter] = useState(route.params.character)

    
    return (
        <ScrollView style={globalStyles.view}>
                        <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Base</Text>
                <Text style={globalStyles.text}>Personagem: {character.name}</Text>
                <Text style={globalStyles.text}>Nível: {character.level}</Text>
                <Text style={globalStyles.text}>Classe: {character.class}</Text>
                <Text style={globalStyles.text}>Raça: {character.race}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Atributos</Text>
                <Text style={globalStyles.text}>Força: {character.attributes.strength}</Text>
                <Text style={globalStyles.text}>Destreza: {character.attributes.dexterity}</Text>
                <Text style={globalStyles.text}>Constituição: {character.attributes.constitution}</Text>
                <Text style={globalStyles.text}>Inteligencia: {character.attributes.intelligence}</Text>
                <Text style={globalStyles.text}>Sabedoria: {character.attributes.wisdom}</Text>
                <Text style={globalStyles.text}>Carisma: {character.attributes.charisma}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Perícias</Text>
                <Text style={globalStyles.text}>Acrobacia: {character.masteries.acrobatics}</Text>
                <Text style={globalStyles.text}>Furtividade: {character.masteries.stealth}</Text>
                <Text style={globalStyles.text}>Percepção: {character.masteries.perception}</Text>
                <Text style={globalStyles.text}>Investigação: {character.masteries.investigation}</Text>
                <Text style={globalStyles.text}>Medicina: {character.masteries.medicine}</Text>
                <Text style={globalStyles.text}>Ladinagem: {character.masteries.thievery}</Text>
                <Text style={globalStyles.text}>Intimidação: {character.masteries.intimidation}</Text>
                <Text style={globalStyles.text}>Persuasão: {character.masteries.persuasion}</Text>
                <Text style={globalStyles.text}>Sobrevivencia: {character.masteries.survivalism}</Text>
                <Text style={globalStyles.text}>Conhecimento Arcano: {character.masteries.arcane_knoledge}</Text>
                <Text style={globalStyles.text}>Arte da Guerra: {character.masteries.war_art}</Text>
                <Text style={globalStyles.text}>Combate Corpo a Corpo: {character.masteries.melee_combat}</Text>
                <Text style={globalStyles.text}>Tiro: {character.masteries.shooting}</Text>
                <Text style={globalStyles.text}>Engenharia: {character.masteries.engineering}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Inventário</Text>
                {
                    character.inventory.map(item => (
                        <Text style={globalStyles.text}>{item}</Text>
                    ))
                }
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Habilidades</Text>
                {
                    character.skills.map(item => (
                        <Text style={globalStyles.text}>{item}</Text>
                    ))
                }
            </View>
        </ScrollView>
    )
}