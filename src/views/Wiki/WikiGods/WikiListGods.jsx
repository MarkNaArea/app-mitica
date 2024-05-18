import { FlatList, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { getGodsByGroupId } from "../../../apiHelper/godControllers";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export const WikiListGods = ({ route, navigation }) => {
    const [gods, setGods] = useState([]);
    const god_group_id = route.params.god_group_id;

    const fetchGods = async () => {
        setGods(await getGodsByGroupId(god_group_id));
    };

    useFocusEffect(
        useCallback(() => {
            fetchGods();
        }, [])
    );

    console.log(gods);

    return (
        <View style={[globalStyles.view]}>
            <FlatList
                data={gods}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable
                        style={globalStyles.card}
                        onPress={() =>
                            navigation.navigate("Wiki Detalhes do Deus", {
                                god: item
                            })
                        }
                    >
                        <Text style={globalStyles.text}>
                            Nome do Deus: {item.name}
                        </Text>
                        <Text style={globalStyles.text}>
                            Elemento: {item.god_type}
                        </Text>
                        <Text style={globalStyles.text}>
                            Habilidade Caracteristica:{" "}
                            {item.characteristic_skill_name}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    );
};
