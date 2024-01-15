import { Image, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";
import { useEffect, useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { storage } from "../../localStorage/asyncStorage";

export const SplashScreen = () => {
    const [isLogged, setIsLogged] = useState(false)
    const navigation = useNavigation();   
    
    useEffect(()=>{
        storage.load({key: "loginToken"}).then(value => {
            console.log("Token:", value.token)
            if (value.token != undefined) {
                setIsLogged(true)
            }
        }).catch(error => {
            setIsLogged(false)
        })
    }, [])

    console.log(isLogged)

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Mítica RPG APP</Text>
            <Image
                style={style.logo}
                source={{
                    uri: "https://freepngimg.com/thumb/dice/90810-and-dice-d20-dungeons-system-dragons-black.png"
                }}
                onLoadEnd={ () => {
                    isLogged
                        ? navigation.dispatch(StackActions.replace('MainRoute', {fromScreen: 'MainMenu'}))
                        : navigation.dispatch(StackActions.replace('StartRoute', {fromScreen: 'Login'}))
                }}
            />
        </View>
    );
};
