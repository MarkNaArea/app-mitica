import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    Text,
    View
} from "react-native";
import { getSkills } from "../../../apiHelper/skillControllers";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef, useState } from "react";
import { globalStyles } from "../../../styles/global";
import { SkillCard } from "../../../components/Wiki/Skills/SkillCard";
import { Button, Chip, Icon, TextInput } from "react-native-paper";
import { RefreshControl } from "react-native-gesture-handler";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../../constants/styleConstants";

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
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSkills(filteredSkills);
        }
    };
    const uniqueValues = new Set();

    const uniqueClasses = fullSkills
        .map((obj) => {
            const value = obj.primary_class; // Change 'name' to the property you want
            if (!uniqueValues.has(value)) {
                uniqueValues.add(value);
                return { key: value }; // If you need a 'key' property for FlatList
            }
            return null;
        })
        .filter((item) => item !== null);

    const uniqueSecondaryClasses = fullSkills
        .map((obj) => {
            const value = obj.secondary_class; // Change 'name' to the property you want
            if (!uniqueValues.has(value)) {
                uniqueValues.add(value);
                return { key: value }; // If you need a 'key' property for FlatList
            }
            return null;
        })
        .filter((item) => item !== null);

    const uniqueElements = fullSkills
        .map((obj) => {
            const value = obj.element; // Change 'name' to the property you want
            if (!uniqueValues.has(value)) {
                uniqueValues.add(value);
                return { key: value }; // If you need a 'key' property for FlatList
            }
            return null;
        })
        .filter((item) => item !== null);

    const uniqueLevels = fullSkills
        .map((obj) => {
            const value = obj.level; // Change 'name' to the property you want
            if (!uniqueValues.has(value)) {
                uniqueValues.add(value);
                return { key: value }; // If you need a 'key' property for FlatList
            }
            return null;
        })
        .filter((item) => item !== null);

    const uniqueCategories = fullSkills
        .map((obj) => {
            const value = obj.category; // Change 'name' to the property you want
            if (!uniqueValues.has(value)) {
                uniqueValues.add(value);
                return { key: value }; // If you need a 'key' property for FlatList
            }
            return null;
        })
        .filter((item) => item !== null);

    const handleChipPress = (item_id, setValueFunction) => {
        setValueFunction((prev) => {
            if (prev.includes(item_id)) {
                return prev.filter((value) => value !== item_id);
            }
            return [...prev, item_id];
        });
    };

    const handleFilter = () => {
        let filteredSkills = fullSkills.filter((item) => {
            let primaryClass = primaryClassFilter.length
                ? primaryClassFilter.includes(item.primary_class)
                : true;
            let secondaryClass = secondaryClassFilter.length
                ? secondaryClassFilter.includes(item.secondary_class)
                : true;
            let element = elementFilter.length
                ? elementFilter.includes(item.element)
                : true;
            let level = levelFilter.length
                ? levelFilter.includes(item.level)
                : true;
            let category = categoryFilter.length
                ? categoryFilter.includes(item.category)
                : true;

            return primaryClass && secondaryClass && element && level && category;
        });
        setSkills(filteredSkills);
        filterBottomSheet.current.close();
    };

    const cleanAllFilters = () => {
        setPrimaryClassFilter([]);
        setSecondaryClassFilter([]);
        setElementFilter([]);
        setLevelFilter([]);
        setCategoryFilter([]);
    };

    return (
        <View style={globalStyles.view}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
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
                        <ScrollView style={{padding: 8}}>
                            <Text style={globalStyles.blacktext}>
                                Classe Primária
                            </Text>
                            <FlatList
                                data={uniqueClasses}
                                renderItem={({ item }) => (
                                    <Chip
                                        style={{ margin: 5 }}
                                        selected={primaryClassFilter.includes(
                                            item.key
                                        )}
                                        onPress={() => {
                                            handleChipPress(
                                                item.key,
                                                setPrimaryClassFilter
                                            );
                                        }}
                                    >
                                        {item.key}
                                    </Chip>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ width: "100%" }}
                                numColumns={3}
                            />
                            <Text style={globalStyles.blacktext}>
                                Classe Secundária
                            </Text>
                            <FlatList
                                data={uniqueSecondaryClasses}
                                renderItem={({ item }) => (
                                    <Chip
                                        style={{ margin: 5 }}
                                        selected={secondaryClassFilter.includes(
                                            item.key
                                        )}
                                        onPress={() => {
                                            handleChipPress(
                                                item.key,
                                                setSecondaryClassFilter
                                            );
                                        }}
                                    >
                                        {item.key}
                                    </Chip>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ width: "100%" }}
                                numColumns={3}
                            />
                            <Text style={globalStyles.blacktext}>Elemento</Text>
                            <FlatList
                                data={uniqueElements}
                                renderItem={({ item }) => (
                                    <Chip
                                        style={{ margin: 5 }}
                                        selected={elementFilter.includes(
                                            item.key
                                        )}
                                        onPress={() => {
                                            handleChipPress(
                                                item.key,
                                                setElementFilter
                                            );
                                        }}
                                    >
                                        {item.key}
                                    </Chip>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ width: "100%" }}
                                numColumns={3}
                            />
                            <Text style={globalStyles.blacktext}>Nível</Text>
                            <FlatList
                                data={uniqueLevels}
                                renderItem={({ item }) => (
                                    <Chip
                                        style={{ margin: 5 }}
                                        selected={levelFilter.includes(item.key)}
                                        onPress={() => {
                                            handleChipPress(
                                                item.key,
                                                setLevelFilter
                                            );
                                        }}
                                    >
                                        {item.key}
                                    </Chip>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ width: "100%" }}
                                numColumns={3}
                            />
                            <Text style={globalStyles.blacktext}>Categoria</Text>
                            <FlatList
                                data={uniqueCategories}
                                renderItem={({ item }) => (
                                    <Chip
                                        style={{ margin: 5 }}
                                        selected={categoryFilter.includes(
                                            item.key
                                        )}
                                        onPress={() => {
                                            handleChipPress(
                                                item.key,
                                                setCategoryFilter
                                            );
                                        }}
                                    >
                                        {item.key}
                                    </Chip>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={{ width: "100%" }}
                                numColumns={3}
                            />
                            <Button mode='contained' onPress={handleFilter}>Filtrar</Button>
                            <Button style={{marginBottom: 50}} onPress={cleanAllFilters}>Limpar Filtros</Button>
                        </ScrollView>
                    )}
                </View>
            </BottomSheet>
        </View>
    );
};
