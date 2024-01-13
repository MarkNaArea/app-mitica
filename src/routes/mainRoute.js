import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../views/login/Login';
import { Register } from '../views/register/Register';
import { Menu } from '../views/menu/Menu';

const Stack = createStackNavigator();

export const MainRoute = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
}