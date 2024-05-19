import { View } from "react-native";
import { globalStyles } from "../../../styles/global";
import { SquareButton } from "../../../components/General/SquareButton";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

export const WikiRaces = ({ route, navigation }) => {
    return (
        <View style={[globalStyles.view]}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.column}>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Humanos"
                            })
                        }
                        buttonText="Humanos"
                        buttonIcon={require("../../../assets/icons/races/human.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Elfos"
                            })
                        }
                        buttonText="Elfos"
                        buttonIcon={require("../../../assets/icons/races/elf.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Anões"
                            })
                        }
                        buttonText="Anões"
                        buttonIcon={require("../../../assets/icons/races/dwarf.png")}
                    />
                </View>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Trolls"
                            })
                        }
                        buttonText="Trolls"
                        buttonIcon={require("../../../assets/icons/races/troll.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Gnomos"
                            })
                        }
                        buttonText="Gnomos"
                        buttonIcon={require("../../../assets/icons/races/gnome.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Orcs"
                            })
                        }
                        buttonText="Orcs"
                        buttonIcon={require("../../../assets/icons/races/orc.png")}
                    />
                </View>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Detalhes da Raça", {
                                race: "Ninfas"
                            })
                        }
                        buttonText="Ninfas"
                        buttonIcon={require("../../../assets/icons/races/nymph.png")}
                    />
                </View>
            </View>
        </View>
    );
};
