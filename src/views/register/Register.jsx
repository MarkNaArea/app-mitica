import { Image, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { style } from "./style";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

export const Register = ({ route, navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = () => {};

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Registro</Text>
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
                style={{ margin: 10, width: '80%'}}
            />
            <TextInput
                label="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={[{ margin: 10, width: '80%' }]}
            />
            <TextInput
                label="Digite novamente sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={[{ margin: 10, width: '80%'}]}
            />
            <Pressable style={{ margin: 10 }}></Pressable>

            <View style={globalStyles.row}>
                <Button
                    mode="contained"
                    style={{ margin: 10 }}
                    onPress={() => {
                        handleRegister();
                    }}
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
