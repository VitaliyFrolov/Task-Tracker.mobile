import React from "react";
import { 
    TouchableOpacity,
    Text,
    ActivityIndicator 
} from "react-native";
import { ICustomButtonProps } from "../type/props";
import { styles } from './Button.styles';

export const Button: React.FC<ICustomButtonProps> = ({
    title,
    onPress,
    variant = "primary",
    disabled = false,
    isLoading = false,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                variant === "primary" ? styles.primary : styles.textButton,
                disabled && styles.disabled,
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === "primary" ? "#fff" : "#6200ea"} />
            ) : (
                <Text style={[styles.text, variant === "primary" ? styles.textPrimary : styles.textText]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}