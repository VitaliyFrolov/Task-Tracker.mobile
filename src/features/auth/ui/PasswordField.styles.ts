import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
    },
    inputError: {
        borderColor: "red",
    },
    iconButton: {
        padding: 8,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 4,
    },
});
