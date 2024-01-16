import { RefreshControl, View } from "react-native";
import { getCampanhas } from "../../../apiHelper/campanhaControllers";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../../../styles/global";
import { useEffect, useState } from "react";
import { FAB } from "react-native-paper";
import { ListCampaignItem } from "../../../components/Campaign/ListCampaignItem/ListCampaignItem";

export const ListCampaigns = ({ routes, navigation }) => {
    const [campaigns, setCampaigns] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchCampanhas = async () => {
        setCampaigns(await getCampanhas());
        setRefreshing(false);
    };
    
    console.log(campaigns)

    const onRefresh = async () => {
        setRefreshing(true);
        setCampaigns([]);
        fetchCampanhas();
    };

    useEffect(() => {
        fetchCampanhas();
    }, []);

    return (
        <View style={globalStyles.view}>
            <FlatList
                data={campaigns}
                renderItem={(item) => <ListCampaignItem campaign={item} navigation={navigation}/>}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            <FAB
                icon="plus"
                style={globalStyles.fab}
                size={10}
                label="Nova Campanha"
                onPress={() => navigation.navigate("Editar Campanha", {newregister: true})}
            />
        </View>
    );
};
