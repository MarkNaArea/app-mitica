import { StyleSheet } from "react-native";
import { shadow } from "react-native-paper";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#11001c",
        alignItems: "center",
        padding: 10
    },

    card: {
        backgroundColor: "#9d80ae",
        alignItems: "start",
        justifyContent: "center",
        padding: 10,
        margin: 6,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: 10
    },

    view: {
        flex: 1,
        backgroundColor: "#11001c"
    },

    text : {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular'
    },

    blacktext: {
        color: '#000000',
        fontFamily: 'Poppins-Regular'
    },

    title : {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 42
    },

    subtitle : {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 22
    },

    row: {
        flexDirection: 'row'
    },

    column: {
        flexDirection: 'column'
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    }
})