import { Image, Pressable, Text, View } from "react-native"
import { globalStyles } from "../../styles/global"
import { style } from "./style"
import { Button, TextInput } from "react-native-paper"
import { useState } from "react"

export const Login = ({route, navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Login</Text>
            <Image style={style.logo} source={{uri: 'https://freepngimg.com/thumb/dice/90810-and-dice-d20-dungeons-system-dragons-black.png'}} />
            <TextInput
                label="Nome de Usuário"
                value={username}
                onChangeText={setUsername}
                style={{margin: 10}}
            />
            <TextInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                style={{margin: 10}}
            />
            <Pressable style={{margin: 10}}>
                <Text style={globalStyles.text}>Esqueceu sua senha?</Text>
            </Pressable>

            <View style={globalStyles.row}>
                <Button mode="contained" style={{margin: 10}}>Login</Button>
                <Button mode="contained" style={{margin: 10}} onPress={() => navigation.navigate('Register')}>Registrar</Button>
            </View>

            <Text style={[globalStyles.text, {margin: 50}]}>Este app é uma criação de MarkNaArea</Text>
        </View>
    )
}