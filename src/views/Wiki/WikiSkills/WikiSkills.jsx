import { FlatList, Image, Pressable, Text, View } from "react-native";
import { getSkills } from "../../../apiHelper/skillControllers";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { SkillCard } from "../../../components/Wiki/Skills/SkillCard";
import { Chip, Icon, TextInput } from "react-native-paper";
import { RefreshControl } from "react-native-gesture-handler";
import BottomSheet from "react-native-gesture-bottom-sheet";

export const WikiSkills = ({ route, navigation }) => {
    const [fullSkills, setFullSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const [search, setSearch] = useState("");

    const filterBottomSheet = useRef();
    const [primaryClassFilter, setPrimaryClassFilter] = useState([]);
    const [secondaryClassFilter, setSecondaryClassFilter] = useState([]);
    const [elementFilter, setElementFilter] = useState([]);
    const [levelFilter, setLevelFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);

    const fetchSkills = async () => {
        setRefreshing(true);
        await getSkills().then((response) => {
            setSkills(response);
            setFullSkills(response);
        });
        setRefreshing(false);
    };

    useFocusEffect(
        useCallback(() => {
            fetchSkills();
        }, [])
    );

    const handleSearch = (query) => {
        if (query === "") {
            setSearch(query);
            setSkills(fullSkills);
        } else {
            setSearch(query);

            let filteredSkills = fullSkills.filter((item) =>
                item.skillname.toLowerCase().includes(query.toLowerCase())
            );
            setSkills(filteredSkills);
        }
    };
    const uniqueValues = new Set();

    return (
        <View style={globalStyles.view}>
            <View style={globalStyles.row}>
                <TextInput
                    style={{ margin: 10, width: "75%" }}
                    label="Pesquisa"
                    value={search}
                    onChangeText={handleSearch}
                />
                <Pressable
                    style={{
                        backgroundColor: "grey",
                        margin: 10,
                        width: "15%",
                        borderRadius: 4
                    }}
                    onPress={() => {
                        filterBottomSheet.current.show();
                    }}
                >
                    <Image
                        source={require("../../../assets/icons/general/filter.png")}
                        style={{
                            width: 50,
                            height: 50,
                            justifyContent: "center",
                            alignSelf: "center"
                        }}
                    />
                </Pressable>
            </View>
            <FlatList
                data={skills}
                keyExtractor={(item) => item._id}
                renderItem={(skill) => (
                    <SkillCard navigation={navigation} skill={skill} />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={fetchSkills}
                    />
                }
            />
            <BottomSheet
                hasDraggableIcon
                ref={filterBottomSheet}
                height={600}
                onRequestClose={() => {
                    filterBottomSheet.current.close();
                }}
            >
                <View style={[globalStyles.column, { alignItems: "center" }]}>
                    <Text style={globalStyles.blacktext}>Filtro</Text>
                    {fullSkills && (
                        <View
                            style={{
                                flexDirection: "row", // Arrange items horizontally
                                flexWrap: "wrap", // Wrap items to the next line when necessary
                                alignItems: "flex-start", // Align items at the start of the container
                                justifyContent: "flex-start" // Align items at the start of the container
                            }}
                        >
                            <FlatList
                                data={fullSkills
                                    .map((obj) => {
                                        const value = obj.primary_class; // Change 'name' to the property you want
                                        if (!uniqueValues.has(value)) {
                                            uniqueValues.add(value);
                                            return { key: value }; // If you need a 'key' property for FlatList
                                        }
                                        return null;
                                    })
                                    .filter((item) => item !== null)}
                                renderItem={({ item }) => (
                                    <Chip style={{ margin: 5 }}>
                                        {item.key}
                                    </Chip>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={true} // Ensure horizontal scrolling
                                contentContainerStyle={{width: "100%"}}
                            />
                        </View>
                    )}
                </View>
            </BottomSheet>
        </View>
    );
};
