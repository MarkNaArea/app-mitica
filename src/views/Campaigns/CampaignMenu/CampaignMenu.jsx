import { ScrollView, View } from "react-native"
import { globalStyles } from "../../../styles/global"

export const CampaignMenu = ({route, navigation}) => {
    const [campaign, setCampaign] = useState([])

    const fetchCampaign = async (campaignid) => {
        setCampaign(await getCampanhaById(campaignid))
    }

    useEffect(() => {
        fetchCampaign(route.params.campaignid)
    }, [])

    return (
        <ScrollView>
            <View style={globalStyles.card}></View>
        </ScrollView>
    )
}