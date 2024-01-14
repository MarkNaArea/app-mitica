import { Text, View } from "react-native"
import { Button } from "react-native-paper"
import { globalStyles } from "../../styles/global"
import { storage } from "../../localStorage/asyncStorage"

export const Menu = ({routes, navigation}) => {
    const loggoffUser = async () => {
        storage.remove({key: "loginToken"}).then(() => {
            console.log("Usuario deslogado com sucesso")
            navigation.reset({
                index: 1,
                routes: [{ name: 'Login' }],
              });
        })
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Hello World</Text>
            <Button
                mode="contained"
                style={{ margin: 10 }}
                onPress={loggoffUser}
            >
                Login
            </Button>
        </View>
    )
}