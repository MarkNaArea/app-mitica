import { useCallback, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { getWikiClasses } from "../../../apiHelper/wikiClassesControllers"
import { FlatList } from "react-native-gesture-handler"
import { useFocusEffect } from "@react-navigation/native"
import { globalStyles } from "../../../styles/global"
import { LinearGradient } from "expo-linear-gradient"
import { LinearBackgroundColors } from "../../../constants/styleConstants"

export const WikiClasses = ({route, navigation}) => {
    const [classes, setClasses] = useState([])

    const fetchClasses = async () => {
        setClasses(await (getWikiClasses()))
    }

    useFocusEffect(
        useCallback(() => {
            fetchClasses()
        }, [])
    )

    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <FlatList 
                data={classes}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Pressable
                        style={globalStyles.card}
                        onPress={() =>
                            navigation.navigate("Wiki Detalhes da Classe", {
                                class: item
                            })
                        }
                    >
                        <Text style={globalStyles.text}>
                            Nome da Classe: {item.class}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    )
}