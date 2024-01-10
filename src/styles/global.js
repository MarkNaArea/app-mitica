import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#11001c",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },

    view: {
        flex: 1,
        backgroundColor: ""
    },

    text : {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular'
    },

    title : {
        color: '#FFFFFF',
        fontFamily: 'poppins-bold',
        fontSize: 42
    },

    row: {
        flexDirection: 'row'
    },

    column: {
        flexDirection: 'column'
    },
})