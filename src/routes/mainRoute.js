import { createStackNavigator } from '@react-navigation/stack';
import { Menu } from '../views/Menu/Menu';

const Stack = createStackNavigator();

export const MainRoute = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
}