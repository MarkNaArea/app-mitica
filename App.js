import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StartRoute } from "./src/routes/startRoute";
import { MainRoute } from "./src/routes/mainRoute";
import { storage } from "./src/localStorage/asyncStorage";
import { useState } from "react";
import { SplashScreen } from "./src/views/SplashScreen/SplashScreen";

export default function App() {
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setIsLoading] = useState(true)
    
    storage.load({key: "loginToken"}).then(value => {
        console.log("Token:", value.token)
        if (value.token != undefined) {
            setIsLogged(true)
            setIsLoading(false)
        }
    }).catch(error => {
        setIsLogged(false)
        setIsLoading(false)
    })

    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
        'Poppins-Italic': require("./assets/fonts/Poppins-Italic.ttf"),
        'Poppins-Light': require("./assets/fonts/Poppins-Light.ttf"),
        'Poppins-Regular': require("./assets/fonts/Poppins-Regular.ttf"),
        'Poppins-Thin': require("./assets/fonts/Poppins-Thin.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    console.log(loading)

    if (loading) {
        return (
            <SplashScreen/>
        )
    }
    
    return (
        <NavigationContainer>
            {isLogged ? <MainRoute/> : <StartRoute />}
        </NavigationContainer>
    );
}
