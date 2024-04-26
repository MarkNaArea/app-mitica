import { FlatList, Text, View } from "react-native";
import { getSkills } from "../../../apiHelper/skillControllers";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { SkillCard } from "../../../components/Wiki/Skills/SkillCard";
import { TextInput } from "react-native-paper";
import { RefreshControl } from "react-native-gesture-handler";

export const WikiSkills = ({ route, navigation }) => {
    const [fullSkills, setFullSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const [search, setSearch] = useState("");

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

    return (
        <View style={globalStyles.view}>
            <TextInput
                style={{ margin: 10 }}
                label="Pesquisa"
                value={search}
                onChangeText={handleSearch}
            />
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
        </View>
    );
};
