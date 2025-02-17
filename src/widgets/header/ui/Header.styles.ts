import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    burgerIcon: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    menu: {
        position: "absolute",
        top: 60,
        left: 0,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        elevation: 5,
        width: '60%',
        zIndex: 2,
    },
    menuItem: {
        fontSize: 16,
        paddingVertical: 8,
    },
});
