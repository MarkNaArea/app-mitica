import { Image, Pressable, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";
import { Button, Divider } from "react-native-paper";
import { useState } from "react";
import { loginUser } from "../../apiHelper/auth";
import { StackActions, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../constants/styleConstants";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (username != "" || password != "") {
            if (await loginUser(username, password)) {
                navigation.dispatch(
                    StackActions.replace("MainRoute", {
                        fromScreen: "MainMenu"
                    })
                );
            }
        } else {
            alert("Insira usuário e senha");
        }
    };

    return (
        <View style={[globalStyles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <Text style={globalStyles.title}>Login</Text>
            <Image
                style={style.logo}
                source={require("../../assets/images/logo.png")}
            />
            <Divider style={{marginVertical: 20}}/>
            <Text style={globalStyles.text}>Nome de Usuário</Text>    
            <TextInput
                placeholder="Digite seu Nome de Usuário"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                style={globalStyles.input}
            />
            <Text style={globalStyles.text}>Senha</Text>    
            <TextInput
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                style={globalStyles.input}
            />
            <Pressable style={{ margin: 10 }}>
                <Text style={globalStyles.text}>Esqueceu sua senha?</Text>
            </Pressable>

            <View style={globalStyles.row}>
                <Button
                    mode="contained"
                    style={{ margin: 10 }}
                    onPress={handleLogin}
                >
                    Login
                </Button>
                <Button
                    mode="contained"
                    style={{ margin: 10 }}
                    onPress={() => navigation.navigate("Register")}
                >
                    Registrar
                </Button>
            </View>

            <Text style={[globalStyles.text, { margin: 50 }]}>
                Este app é uma criação de MarkNaArea
            </Text>
        </View>
    );
};
