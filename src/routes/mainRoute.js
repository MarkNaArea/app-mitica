import { createStackNavigator } from "@react-navigation/stack";
import { Menu } from "../views/Menu/Menu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ListCampaigns } from "../views/Campaigns/ListCampaigns/ListCampaigns";
import { EditCampaign } from "../views/Campaigns/EditCampaign/EditCampaign";
import { ListCharacters } from "../views/Character/ListCharacters/ListCharacters";
import { CharacterMenu } from "../views/Character/CharacterMenu/CharacterMenu";
import { EditCharacter } from "../views/Character/EditCharacter/EditCharacter";
import { WikiMenu } from "../views/Wiki/WikiMenu/WikiMenu";
import { WikiSkills } from "../views/Wiki/WikiSkills/WikiSkills";
import { WikiSkillDetails } from "../views/Wiki/WikiSkills/WikiSkillDetails";
import { WikiRaces } from "../views/Wiki/WikiRaces/WikiRaces";
import { WikiRaceDetails } from "../views/Wiki/WikiRaces/WikiRaceDetails";
import { WikiClasses } from "../views/Wiki/WikiClasses/WikiClasses";
import { WikiRules } from "../views/Wiki/WikiRules/WikiRules";
import { WikiItems } from "../views/Wiki/WikiItems/WikiItems";
import { WikiGeography } from "../views/Wiki/WikiGeography/WikiGeography";
import { WikiSelectGodGroup } from "../views/Wiki/WikiGods/WikiSelectGodGroup";
import { WikiListGods } from "../views/Wiki/WikiGods/WikiListGods";
import { WikiGodDetails } from "../views/Wiki/WikiGods/WikiGodDetails";

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
                        <Stack.Screen name="Menu da Wiki" component={WikiMenu} />
                        <Stack.Screen name="Wiki Regras" component={WikiRules} />
                        <Stack.Screen name="Wiki Classes" component={WikiClasses} />
                        <Stack.Screen name="Wiki Raças" component={WikiRaces} />
                        <Stack.Screen name="Detalhes da Raça" component={WikiRaceDetails} />
                        <Stack.Screen name="Wiki Habilidades" component={WikiSkills} />
                        <Stack.Screen name="Detalhes da Habilidade" component={WikiSkillDetails} />
                        <Stack.Screen name="Wiki Itens" component={WikiItems} />
                        <Stack.Screen name="Wiki Geografia" component={WikiGeography} />
                        <Stack.Screen name="Wiki Selecionar Grupo de Deuses" component={WikiSelectGodGroup} />
                        <Stack.Screen name="Wiki Lista de Deuses" component={WikiListGods} />
                        <Stack.Screen name="Wiki Detalhes do Deus" component={WikiGodDetails} />
                    </Stack.Navigator>
                )}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};
