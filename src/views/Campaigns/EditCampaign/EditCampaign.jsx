import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Button } from "react-native-paper"
import { globalStyles } from "../../../styles/global"
import { LinearGradient } from "expo-linear-gradient"
import { LinearBackgroundColors } from "../../../constants/styleConstants"

export const EditCampaign = ({route, navigation}) => {
    const [campaign, setCampaign] = useState("")
    const [listPlayers, setListPlayers] = useState([])

    useEffect(()=>{
        if (!route.params.newregister) {
            setCampaign(route.params.campaign)
        }
    }, [])

    return (
        <View style={globalStyles.view}>
                        <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View style={globalStyles.card}>
                <Text style={globalStyles.text}>Campanha: {campaign.name}</Text>
            </View>
            <Button>Teste</Button>
        </View>
    )
}