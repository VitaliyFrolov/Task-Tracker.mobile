import { FC } from "react";
import { 
    TouchableOpacity,
    Text,
    ActivityIndicator 
} from "react-native";
import { ICustomButtonProps } from "../type/props";
import { styles } from './Button.styles';

export const Button: FC<ICustomButtonProps> = ({
    children,
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
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === "primary" ? "#fff" : "#6200ea"} />
            ) : (
                <Text style={[styles.text, variant === "primary" ? styles.textPrimary : styles.textText]}>
                    {children}
                </Text>
            )}
        </TouchableOpacity>
    );
}