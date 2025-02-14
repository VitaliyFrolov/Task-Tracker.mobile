import React, { useState } from "react";
import { 
    TextInput, 
    Text, 
    View, 
    TouchableOpacity, 
    TextInputProps, 
} from "react-native";
import { Controller, Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { styles } from './PasswordField.styles';

interface IPasswordField<T extends FieldValues> {
    name: Path<T>; 
    control: Control<T>;
    placeholder: string;
    secureTextEntry?: boolean;
    rules?: RegisterOptions<T, Path<T>>;
    error?: string;
    inputProps?: TextInputProps;
}

export const PasswordField = <T extends FieldValues>({
    name,
    control,
    placeholder,
    secureTextEntry = false,
    rules,
    error,
    inputProps
}: IPasswordField<T>) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={[styles.inputWrapper, error && styles.inputError]}>
                        <TextInput
                            {...inputProps}
                            placeholder={placeholder}
                            placeholderTextColor="#aaa"
                            secureTextEntry={!isPasswordVisible}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                        />
                        {secureTextEntry && (
                            <TouchableOpacity 
                                onPress={() => setIsPasswordVisible(prev => !prev)}
                                style={styles.iconButton}
                            >
                                <Ionicons 
                                    name={isPasswordVisible ? "eye" : "eye-off"} 
                                    size={22} 
                                    color="#666" 
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}