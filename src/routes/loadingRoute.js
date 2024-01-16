import { createStackNavigator } from "@react-navigation/stack";
import { Menu } from "../views/Menu/Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SplashScreen } from "../views/SplashScreen/SplashScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const LoadingRoute = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};
