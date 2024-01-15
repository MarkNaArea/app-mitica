import { createStackNavigator } from "@react-navigation/stack";
import { Menu } from "../views/Menu/Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const LoadingRoute = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
};
