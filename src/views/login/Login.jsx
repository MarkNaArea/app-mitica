import { Image, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { loginUser } from "../../apiHelper/auth";
import { StackActions, useNavigation } from "@react-navigation/native";

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (username != "" || password != "") {
            if (await loginUser(username, password)) {
                navigation.dispatch(StackActions.replace('MainRoute', {fromScreen: 'MainMenu'}));
            }
        } else {
            alert("Insira usuário e senha");
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Login</Text>
            <Image
                style={style.logo}
                source={{
                    uri: "https://freepngimg.com/thumb/dice/90810-and-dice-d20-dungeons-system-dragons-black.png"
                }}
            />
            <TextInput
                label="Nome de Usuário"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                style={{ margin: 10, width: "80%" }}
            />
            <TextInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                style={{ margin: 10, width: "80%" }}
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
