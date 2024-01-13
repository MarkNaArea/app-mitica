import { Image, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";

export const SplashScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Mítica RPG APP</Text>
            <Image
                style={style.logo}
                source={{
                    uri: "https://freepngimg.com/thumb/dice/90810-and-dice-d20-dungeons-system-dragons-black.png"
                }}
            />
        </View>
    );
};
