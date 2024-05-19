import { Image, Pressable, Text } from "react-native"
import { styles } from "./style"
import { globalStyles } from "../../styles/global"

export const SquareButton = (props) => {
    const icon = props.buttonIcon
    const text = props.buttonText
    const onPress = props.onPress

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Image style={[styles.icon]} source={icon}/>
            <Text style={[globalStyles.text]}>{text}</Text>
        </Pressable>
    )
}