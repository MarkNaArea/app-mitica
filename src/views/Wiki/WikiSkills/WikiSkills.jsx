import { FlatList, Text, View } from "react-native";
import { getSkills } from "../../../apiHelper/skillControllers";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { SkillCard } from "../../../components/Wiki/Skills/SkillCard";
import { TextInput } from "react-native-paper";

export const WikiSkills = ({ route, navigation }) => {
    const [fullSkills, setFullSkills] = useState([])
    const [skills, setSkills] = useState([]);

    const [search, setSearch] = useState('')

    const fetchSkills = async () => {
        await getSkills().then(response => {
            setSkills(response)
            setFullSkills(response)
        })
    };

    useFocusEffect(
        useCallback(() => {
            fetchSkills();
        }, [])
    );

    console.log(fullSkills);

    const handleSearch = query => {
        if (query === "") {
            setSearch(query)
            setSkills(fullSkills)
        } else {
            setSearch(query)
            
            let filteredSkills = fullSkills.filter(item => item.skillname.toLowerCase().includes(query.toLowerCase()))
            setSkills(filteredSkills)
        }
    }

    return (
        <View style={globalStyles.view}>
            <TextInput 
                style={{margin: 10}}
                label="Pesquisa"
                value={search}
                onChangeText={handleSearch}
            />
            <FlatList 
                data={skills}
                keyExtractor={item => item._id}
                renderItem={(skill) => (
                    <SkillCard navigation={navigation} skill={skill}/>
                )}
            />
        </View>
    );
};
