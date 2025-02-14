import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    inputContainer: {
        marginBottom: 10,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 2,
    },
    textCenter: {
        textAlign: "center",
        fontSize: 14,
        color: "#666",
    },
    link: {
        color: "#007bff",
        fontWeight: "bold",
    },
});
