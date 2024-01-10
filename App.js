import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { StartRoute } from "./src/routes/startRoute";
import { useCallback } from "react";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <NavigationContainer>
            <StartRoute />
        </NavigationContainer>
    );
}