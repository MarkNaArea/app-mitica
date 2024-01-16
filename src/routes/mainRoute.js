import { createStackNavigator } from "@react-navigation/stack";
import { Menu } from "../views/Menu/Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ListCampaigns } from "../views/Campaigns/ListCampaigns/ListCampaigns";
import { EditCampaign } from "../views/Campaigns/EditCampaign/EditCampaign";
import { ListCharacters } from "../views/Character/ListCharacters/ListCharacters";
import { CharacterMenu } from "../views/Character/CharacterMenu/CharacterMenu";
import { EditCharacter } from "../views/Character/EditCharacter/EditCharacter";

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
                            component={ListCampaigns}
                        />
                        <Stack.Screen
                            name="Editar Campanha"
                            component={EditCampaign}
                        />
                        <Stack.Screen name="Jogar" component={Menu} />
                    </Stack.Navigator>
                )}
            </Drawer.Screen>
            <Drawer.Screen name="Personagens">
                {() => (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Meus Personagens"
                            component={ListCharacters}
                        />
                        <Stack.Screen
                            name="Criar Personagem"
                            component={EditCharacter}
                        />
                        <Stack.Screen
                            name="Menu de Personagem"
                            component={CharacterMenu}
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
