import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { globalStyles } from "../../styles/global";
import { StackActions, useNavigation } from "@react-navigation/native";
import { storage } from "../../localStorage/asyncStorage";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../constants/styleConstants";

export const Menu = () => {
    const navigation = useNavigation();

    const loggoffUser = async () => {
        storage.remove({ key: "loginToken" }).then(() => {
            console.log("Usuario deslogado com sucesso");
            navigation.dispatch(
                StackActions.replace("SplashScreen", {
                    fromScreen: "SplashScreen"
                })
            );
        });
    };

    return (
        <View style={globalStyles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <Text style={globalStyles.text}>Hello World</Text>
            <Button
                mode="contained"
                style={{ margin: 10 }}
                onPress={loggoffUser}
            >
                Login
            </Button>
        </View>
    );
};
