import { createStackNavigator } from "@react-navigation/stack";
import { Menu } from "../views/Menu/Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const MainRoute = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MainMenu">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Menu" component={Menu} />
                    </Stack.Navigator>
                )}
            </Drawer.Screen>
            <Drawer.Screen name="Campanhas">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Minhas Campanhas"
                            component={Menu}
                        />
                        <Stack.Screen name="Criar Campanha" component={Menu} />
                        <Stack.Screen name="Jogar" component={Menu} />
                    </Stack.Navigator>
                )}
            </Drawer.Screen>
            <Drawer.Screen name="Personagens">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Meus Personagens"
                            component={Menu}
                        />
                        <Stack.Screen
                            name="Criar Personagem"
                            component={Menu}
                        />
                    </Stack.Navigator>
                )}
            </Drawer.Screen>
            <Drawer.Screen name="Wiki">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Menu da Wiki" component={Menu} />
                        <Stack.Screen name="Regras" component={Menu} />
                        <Stack.Screen name="Classes" component={Menu} />
                        <Stack.Screen name="Raças" component={Menu} />
                        <Stack.Screen name="Habilidades" component={Menu} />
                        <Stack.Screen name="Equipamentos" component={Menu} />
                        <Stack.Screen name="Geografia" component={Menu} />
                    </Stack.Navigator>
                )}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};
