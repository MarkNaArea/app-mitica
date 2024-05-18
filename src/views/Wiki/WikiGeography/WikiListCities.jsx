import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { getWikiCities } from "../../../apiHelper/wikiCitiesControllers";

export const WikiListCities = ({ route, navigation }) => {
    const [cities, setCities] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchCities = async () => {
        setRefreshing(true);
        setCities(await getWikiCities());
        setRefreshing(false);
    };

    useFocusEffect(
        useCallback(() => {
            fetchCities();
        }, [])
    );

    return (
        <View style={globalStyles.view}>
            <FlatList
                data={cities}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Pressable
                        style={globalStyles.card}
                        onPress={() =>
                            navigation.navigate("Wiki Detalhes Cidade", {
                                city: item,
                            })
                        }
                    >
                        <Text style={globalStyles.text}>{item.name}</Text>
                        <Text style={globalStyles.text}>{item.god}</Text>
                    </Pressable>
                )}
                refreshing={refreshing}
                onRefresh={fetchCities}
            />
        </View>
    );
};
