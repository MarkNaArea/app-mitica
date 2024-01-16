import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../../styles/global"

export const ListCampaignItem = (props) => {
    const campaign = props.campaign.item
    const navigation = props.navigation

    return (
        <Pressable style={globalStyles.card} onPress={() => navigation.navigate("Editar Campanha", {newregister: false, campaign: campaign})}>
            <View style={globalStyles.column}>
                <Text style={globalStyles.text}>Nome da Campanha: {campaign.name}</Text>
                <Text style={globalStyles.text}>Mestre: {campaign.gamemaster}</Text>
                <Text style={globalStyles.text}>Data de Início: {campaign.date}</Text>
            </View>
        </Pressable>
    )
}