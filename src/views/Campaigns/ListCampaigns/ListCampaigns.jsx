import {
    Image,
    Pressable,
    RefreshControl,
    Text,
    TextInput,
    View
} from "react-native";
import {
    getCampanhas,
    getCampanhasByMasterId,
    getCampanhasByUserId,
    postCampanha
} from "../../../apiHelper/campanhaControllers";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../../../styles/global";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Divider, FAB } from "react-native-paper";
import { ListCampaignItem } from "../../../components/Campaign/ListCampaignItem/ListCampaignItem";
import { styles } from "./styles";
import { getUserId } from "../../../utils/storageUtils";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";
import BottomSheet from "react-native-gesture-bottom-sheet";

export const ListCampaigns = ({ routes, navigation }) => {
    const [campaigns, setCampaigns] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("Jogando");

    const [campaignName, setCampaignName] = useState(""); // If the user wants to create a new campaign

    const bottomSheet = useRef();

    const fetchCampanhas = async () => {
        setRefreshing(true);

        if (selectedMenu === "Jogando") {
            setCampaigns(await getCampanhasByUserId(await getUserId()));
        } else {
            setCampaigns(await getCampanhasByMasterId(await getUserId()));
        }

        // setCampaigns(await getCampanhas());
        setRefreshing(false);
    };

    const handleCreateCampaign = async () => {
        if (!campaignName) {
            alert("Digite um nome para a campanha");
            return;
        }

        const data = {
            name: campaignName,
            game_master_id: await getUserId(),
            date: new Date().toLocaleDateString().replaceAll("/", "-")
        };

        await postCampanha(data).then((response) => {
            if (response.status === 200) {
                alert("Campanha criada com sucesso");
                navigation.navigate("Menu da campanha", {
                    campaignId: response._id
                });
            } else {
                alert("Erro ao criar campanha");
            }
        });
    };

    const onRefresh = async () => {
        setCampaigns([]);
        fetchCampanhas();
    };

    useFocusEffect(
        useCallback(() => {
            fetchCampanhas();
        }, [])
    );

    useEffect(() => {
        fetchCampanhas();
    }, [selectedMenu]);

    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <View
                style={[
                    {
                        flexWrap: "wrap",
                        alignContent: "space-around",
                        height: 40
                    }
                ]}
            >
                <Pressable
                    style={
                        selectedMenu === "Jogando"
                            ? styles.selectedBox
                            : styles.box
                    }
                    onPress={() => setSelectedMenu("Jogando")}
                >
                    <Text style={[globalStyles.text, { textAlign: "center" }]}>
                        Jogando
                    </Text>
                </Pressable>
                <Pressable
                    style={
                        selectedMenu === "Mestre"
                            ? styles.selectedBox
                            : styles.box
                    }
                    onPress={() => setSelectedMenu("Mestre")}
                >
                    <Text style={[globalStyles.text, { textAlign: "center" }]}>
                        Mestre
                    </Text>
                </Pressable>
            </View>
            {campaigns.length === 0 ? (
                <View
                    style={{ justifyContent: "center", alignContent: "center" }}
                >
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            alignSelf: "center",
                            marginTop: 100
                        }}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/8800/8800576.png"
                        }}
                    />
                    <Text
                        style={[globalStyles.subtitle, { textAlign: "center" }]}
                    >
                        Que pena!
                    </Text>
                    <Text style={[globalStyles.text, { textAlign: "center" }]}>
                        Você ainda não está participando de nenhuma campanha
                    </Text>
                    <Divider style={{ marginTop: 20 }} />
                    <Text
                        style={[
                            globalStyles.text,
                            { textAlign: "center", marginTop: 20 }
                        ]}
                    >
                        Crie uma nova campanha ou peça para o mestre de uma
                        campanha te adicionar
                    </Text>
                    <Divider style={{ marginTop: 20 }} />
                    <Pressable onPress={onRefresh}>
                        <Image
                            style={[
                                {
                                    width: 40,
                                    height: 40,
                                    alignSelf: "center",
                                    marginTop: 20,
                                    tintColor: "white"
                                }
                            ]}
                            source={require("../../../assets/icons/general/reload.png")}
                        />
                    </Pressable>
                </View>
            ) : (
                <FlatList
                    data={campaigns}
                    renderItem={(item) => (
                        <ListCampaignItem
                            campaign={item}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            )}
            {selectedMenu === "Mestre" && (
                <FAB
                    icon="plus"
                    style={globalStyles.fab}
                    size={10}
                    label="Nova Campanha"
                    onPress={() => bottomSheet.current.show()}
                />
            )}
            <BottomSheet
                hasDraggableIcon
                ref={bottomSheet}
                height={200}
                onRequestClose={() => bottomSheet.current.close()}
            >
                <View
                    style={[
                        globalStyles.container,
                        { justifyContent: "center" }
                    ]}
                >
                    <Text style={globalStyles.blacktext}>Nome da campanha</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Digite o nome da campanha"
                        value={campaignName}
                        onChangeText={setCampaignName}
                    />
                    <Button
                        mode="contained"
                        style={{
                            margin: 10,
                            color: "white",
                            fontFamily: "Poppins-Regular"
                        }}
                        onPress={handleCreateCampaign}
                    >
                        Criar campanha
                    </Button>
                </View>
            </BottomSheet>
        </View>
    );
};
