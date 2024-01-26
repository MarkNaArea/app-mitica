import { FlatList, View } from "react-native";
import { SquareButton } from "../../../components/General/SquareButton";
import { globalStyles } from "../../../styles/global";

export const WikiMenu = ({ route, navigation }) => {

    return (
        <View style={[globalStyles.view]}>
            <View style={globalStyles.column}>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Regras")}
                        buttonText="Regras"
                        buttonIcon={require("../../../assets/icons/graduation-cap.png")}
                    />
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Raças")}
                        buttonText="Raças"
                        buttonIcon={require("../../../assets/icons/paw.png")}
                    />
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Classes")}
                        buttonText="Classes"
                        buttonIcon={require("../../../assets/icons/sword.png")}
                    />
                </View>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Habilidades")}
                        buttonText="Habilidaades"
                        buttonIcon={require("../../../assets/icons/bolt.png")}
                    />
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Itens")}
                        buttonText="Itens"
                        buttonIcon={require("../../../assets/icons/backpack.png")}
                    />
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Deuses")}
                        buttonText="Deuses"
                        buttonIcon={require("../../../assets/icons/yeti.png")}
                    />
                </View>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() => navigation.navigate("Wiki Geografia")}
                        buttonText="Geografia"
                        buttonIcon={require("../../../assets/icons/way.png")}
                    />
                </View>
            </View>
        </View>
    );
};
