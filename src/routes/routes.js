import { createStackNavigator } from "@react-navigation/stack";
import { StartRoute } from "./startRoute";
import { MainRoute } from "./mainRoute";
import { SplashScreen } from "../views/SplashScreen/SplashScreen";

const RouteStack = createStackNavigator();

export const Routes = () => {
    return (
        <RouteStack.Navigator screenOptions={{ headerShown: false }}>
            <RouteStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RouteStack.Screen name="StartRoute" component={StartRoute}/>
            <RouteStack.Screen name="MainRoute" component={MainRoute}/>
        </RouteStack.Navigator>
    )
}


