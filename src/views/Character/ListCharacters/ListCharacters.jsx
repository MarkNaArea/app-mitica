import { RefreshControl, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../../../styles/global";
import { useEffect, useState } from "react";
import { FAB } from "react-native-paper";
import { getCharacter } from "../../../apiHelper/characterControllers";
import { ListCharacterItem } from "../../../components/Character/ListCharacterItem/ListCharacterItem";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

export const ListCharacters = ({ routes, navigation }) => {
    const [characters, setCharacters] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchCampanhas = async () => {
        setCharacters(await getCharacter());
        setRefreshing(false);
        console.log(characters);
    };

    const onRefresh = async () => {
        setRefreshing(true);
        setCharacters([]);
        fetchCampanhas();
    };

    useEffect(() => {
        fetchCampanhas();
    }, []);

    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <FlatList
                data={characters}
                renderItem={(item) => (
                    <ListCharacterItem
                        character={item}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            <FAB
                icon="plus"
                style={globalStyles.fab}
                size={10}
                label="Verificar Convites"
                onPress={() =>
                    navigation.navigate("Editar Campanha", {
                        newregister: true
                    })
                }
            />
        </View>
    );
};
