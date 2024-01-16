import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#11001c",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },

    card: {
        backgroundColor: "#9d80ae",
        alignItems: "start",
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderColor: "#11001c",
        borderRadius: 10,
        borderWidth: 10,
    },

    view: {
        flex: 1,
        backgroundColor: "#11001c"
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
})