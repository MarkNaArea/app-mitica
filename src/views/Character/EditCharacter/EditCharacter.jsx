import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native-paper"
import { globalStyles } from "../../../styles/global"
import { postCharacter } from "../../../apiHelper/characterControllers"
import { LinearGradient } from "expo-linear-gradient"
import { LinearBackgroundColors } from "../../../constants/styleConstants"

export const EditCharacter = ({route, navigation}) => {
    const [character, setCharacter] = useState([])
    const newregister = route.params.newregister

    useEffect(()=>{
        if (newregister) {
            const newPersonagem = {
                name: '',
                level: 1,
                class: '',
                race: '',
                god: '',
                health: 10,
                max_health: 10,
                subatt: 10,
                max_subatt: 10,
                ca: 10,
                evolution_points: 0,
                height: 1.5,
                attributes: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0
                },
                masteries: {
                    acrobatics: 0,
                    stealth: 0,
                    perception: 0,
                    investigation: 0,
                    medicine: 0,
                    thievery: 0,
                    intimidation: 0,
                    persuasion: 0,
                    survivalism: 0,
                    arcane_knoledge: 0,
                    war_art: 0,
                    melee_combat: 0,
                    shooting: 0,
                    engineering: 0,
                },
                inventory: [],
                skills: [],
            }
        } else {
            setCharacter(handleUpdateCharacterModelVersion(route.params.character))
            
        }
    }, [])


    // Functioon to update the character to the last model version, running in the app. Useful to mantain characters working in every version i deploy.
    function handleUpdateCharacterModelVersion(character) {
        const modelKeys = Object.keys(newPersonagem);
        const characterKeys = Object.keys(character);
    
        // Add missing fields from the model
        modelKeys.forEach((key) => {
            if (!characterKeys.includes(key)) {
                if (typeof newPersonagem[key] === 'object' && !Array.isArray(newPersonagem[key])) {
                    // Handle nested objects
                    character[key] = {};
                    const nestedModelKeys = Object.keys(newPersonagem[key]);
                    nestedModelKeys.forEach((nestedKey) => {
                        character[key][nestedKey] = newPersonagem[key][nestedKey];
                    });
                } else {
                    character[key] = newPersonagem[key];
                }
            }
        });
    
        // Remove extra fields from the character
        characterKeys.forEach((key) => {
            if (!modelKeys.includes(key)) {
                delete character[key];
            }
        });
    
        return character;
    }

    const saveCharacter = async () => {
        if (postCharacter(character)) {
            navigation.navigate("Lista de Personagens")
        }
    }

    return (
        <View style={globalStyles.view}>
                        <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>Nome do Personagem: {character.name}</Text>
            </View>
            <Button onPress={() => saveCharacter()}>Teste</Button>
        </View>
    )
}