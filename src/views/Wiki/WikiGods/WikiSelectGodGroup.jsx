import { View } from "react-native";
import { SquareButton } from "../../../components/General/SquareButton";
import { globalStyles } from "../../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

export const WikiSelectGodGroup = ({ route, navigation }) => {
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
                            navigation.navigate("Wiki Lista de Deuses", {
                                god_group_id: "6648daa2d86966c6cbe16171"
                            })
                        }
                        buttonText="Elemental"
                        buttonIcon={require("../../../assets/icons/gods/earth.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Wiki Lista de Deuses", {
                                god_group_id: "6648daa2d86966c6cbe16172"
                            })
                        }
                        buttonText="Sagrado"
                        buttonIcon={require("../../../assets/icons/gods/holy-chalice.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Wiki Lista de Deuses", {
                                god_group_id: "6648daa2d86966c6cbe16173"
                            })
                        }
                        buttonText="Místico"
                        buttonIcon={require("../../../assets/icons/gods/eye.png")}
                    />
                </View>
                <View style={globalStyles.row}>
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Wiki Lista de Deuses", {
                                god_group_id: "6648daa2d86966c6cbe16174"
                            })
                        }
                        buttonText="Sombrio"
                        buttonIcon={require("../../../assets/icons/gods/skull.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Wiki Lista de Deuses", {
                                god_group_id: "6648daa2d86966c6cbe16175"
                            })
                        }
                        buttonText="Furioso"
                        buttonIcon={require("../../../assets/icons/gods/helmet.png")}
                    />
                    <SquareButton
                        onPress={() =>
                            navigation.navigate("Wiki Lista de Deuses", {
                                god_group_id: "6648daa2d86966c6cbe16176"
                            })
                        }
                        buttonText="Tecnológico"
                        buttonIcon={require("../../../assets/icons/gods/connection.png")}
                    />
                </View>
            </View>
        </View>
    );
};
