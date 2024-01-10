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
        fontFamily: 'Poppins-Regular'
    },

    title : {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: 42
    },

    row: {
        flexDirection: 'row'
    },

    column: {
        flexDirection: 'column'
    },
})