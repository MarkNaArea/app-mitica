import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    centeredContainer: {
        flex: 1,
        padding: 10,
    },

    card: {
        alignItems: "start",
        justifyContent: "center",
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 12,
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

    centeredText : {
        color: '#FFFFFF',
        textAlign: 'center',
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
    },

    input: {
        height: 42,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 16,
        fontFamily: 'Poppins-Regular',
        color: 'black',
    }
})