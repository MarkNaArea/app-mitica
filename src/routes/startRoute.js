import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../views/Login/Login';
import { Register } from '../views/Register/Register';
import { Menu } from '../views/Menu/Menu';

const Stack = createStackNavigator();

export const StartRoute = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
}