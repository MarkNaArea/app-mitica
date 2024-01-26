import { FlatList, Text, View } from "react-native";
import { getSkills } from "../../../apiHelper/skillControllers";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { SkillCard } from "../../../components/Wiki/Skills/SkillCard";

export const WikiSkills = ({ route, navigation }) => {
    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        setSkills(await getSkills());
    };

    useFocusEffect(
        useCallback(() => {
            fetchSkills();
        }, [])
    );

    console.log(skills);

    return (
        <View style={globalStyles.view}>
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
