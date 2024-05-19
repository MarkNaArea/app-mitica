import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";

export const ListCharacterItem = (props) => {
    const character = props.character.item;
    const navigation = props.navigation;

    return (
        <Pressable
            style={globalStyles.card}
            onPress={() =>
                navigation.navigate("Menu de Personagem", {
                    character: character
                })
            }
        >
            <View style={globalStyles.column}>
                <Text style={globalStyles.text}>
                    Nome do Personagem: {character.name}
                </Text>
                <View style={globalStyles.row}>
                    <Text style={globalStyles.text}>Nível: </Text>
                    <Text style={[globalStyles.text, { color: "red" }]}>
                        {character.level}
                    </Text>

                    <Text style={globalStyles.text}>
                        {" "}
                        | Classe: {character.class}
                    </Text>
                </View>
                <Text style={globalStyles.text}>Raça: {character.race}</Text>
                <Text style={globalStyles.text}>Deus: {character.god}</Text>
            </View>
        </Pressable>
    );
};
