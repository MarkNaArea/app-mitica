import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../views/login/Login';
import { Register } from '../views/register/Register';

const Stack = createStackNavigator();

export const StartRoute = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}