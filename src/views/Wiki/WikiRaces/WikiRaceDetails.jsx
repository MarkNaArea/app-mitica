import { ScrollView, Text, View } from "react-native";
import { getRaces } from "../../../apiHelper/wikiRacesControllers";
import { useEffect, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

export const WikiRaceDetails = ({ route, navigation }) => {
    const [race, setRace] = useState({
        race: "",
        lifeExpectancy: "",
        description: "",
        racialTrait: "",
        racialTraitDetails: ""
    });
    const raceParams = route.params.race;

    const fetchRace = async () => {
        let races = await getRaces();

        let filteredRace = races.filter((race) => {
            return race.race === raceParams;
        });

        if (filteredRace[0]) {
            setRace(filteredRace[0]);
        }
    };

    useEffect(() => {
        fetchRace();
    }, []);

    return (
        <ScrollView style={globalStyles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Raça: {race.race}</Text>
                <Text style={globalStyles.text}>
                    Expextativa de Vida: {race.lifeExpectancy}
                </Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>Descrição:</Text>
                <Text style={globalStyles.text}>{race.description}</Text>
            </View>
            <View style={globalStyles.card}>
                <Text style={globalStyles.subtitle}>
                    Caracteristica Racial: {race.racialTrait}
                </Text>
                <Text style={globalStyles.text}>{race.racialTraitDetails}</Text>
            </View>
        </ScrollView>
    );
};
