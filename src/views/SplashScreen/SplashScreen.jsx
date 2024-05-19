import { Image, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";
import { useEffect, useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { storage } from "../../localStorage/asyncStorage";
import { getLoginToken } from "../../utils/storageUtils";

export const SplashScreen = () => {
    const [isLogged, setIsLogged] = useState(false)
    const navigation = useNavigation();   
    
    const checkLogin = async () => {
        await getLoginToken().then(value => {
            if (value != undefined) {
                setIsLogged(true)
            }
        }).catch(error => {
            setIsLogged(false)
        })
    }

    useEffect(()=>{
        checkLogin()
    }, [])

    console.log(isLogged)

    return (
        <View style={[globalStyles.view, {alignItems: 'center', justifyContent: 'center'}]}>
            <Text style={globalStyles.title}>Mítica RPG APP</Text>
            <Image
                style={style.logo}
                source={require("../../assets/images/logo.png")}
                onLoadEnd={ () => {
                    isLogged
                        ? navigation.dispatch(StackActions.replace('MainRoute', {fromScreen: 'MainMenu'}))
                        : navigation.dispatch(StackActions.replace('StartRoute', {fromScreen: 'Login'}))
                }}
            />
        </View>
    );
};
