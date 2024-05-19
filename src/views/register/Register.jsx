import { Image, Pressable, Text, View, TextInput } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";
import { Button, Divider } from "react-native-paper";
import { useState } from "react";
import { loginUser, registerUser } from "../../apiHelper/auth";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBackgroundColors } from "../../constants/styleConstants";

export const Register = ({ route, navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = async () => {
        if (password === confirmPassword) {
            if (password.length >= 8) {
                if (await registerUser(username, password)) {
                    if (await loginUser(username, password)) {
                        navigation.navigate("Menu");
                    }
                }
            } else {
                alert("A senha deve ter no mínimo 8 caracteres.");
            }
        } else {
            alert("Senhas diferentes!");
        }
    };

    return (
        <View
            style={[
                globalStyles.container,
                { justifyContent: "center", alignItems: "center" }
            ]}
        >
            <LinearGradient
                // Background Linear Gradient
                colors={LinearBackgroundColors}
                style={globalStyles.background}
            />
            <Text style={globalStyles.title}>Registro</Text>
            <Image
                style={style.logo}
                source={require("../../assets/images/logo.png")}
            />
            <Divider style={{marginVertical: 20}}/>
            <Text style={globalStyles.text}>Nome de Usuário</Text>
            <TextInput
                placeholder="Digite o Nome de Usuário"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                style={globalStyles.input}
            />
            <Text style={globalStyles.text}>Senha</Text>
            <TextInput
                placeholder="Digite sua senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                style={globalStyles.input}
            />
            <Text style={globalStyles.text}>Repita a senha</Text>
            <TextInput
                placeholder="Digite novamente sua senha"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                style={globalStyles.input}
            />
            
            <Pressable
                style={{ margin: 10 }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={globalStyles.text}>
                    Já possui conta? Clique aqui e faça Login
                </Text>
            </Pressable>

            <View style={globalStyles.row}>
                <Button
                    mode="contained"
                    style={{ margin: 10 }}
                    onPress={handleRegister}
                >
                    Registrar
                </Button>
            </View>

            <Text style={[globalStyles.text, { margin: 30 }]}>
                Este app é uma criação de MarkNaArea
            </Text>
        </View>
    );
};
