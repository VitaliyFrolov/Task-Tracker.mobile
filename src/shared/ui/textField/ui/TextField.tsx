import React from "react";
import { TextInput, Text, View  } from "react-native";
import { Controller, FieldValues } from "react-hook-form";
import { ITextFieldProps } from "../type/props";
import { styles } from './TextField.styles';

export const TextField = <T extends FieldValues>({
    name,
    control,
    placeholder,
    secureTextEntry = false,
    rules,
    error,
}: ITextFieldProps<T>) => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={[styles.input, error && styles.inputError]}
                        placeholderTextColor="#aaa"
                    />
                )}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};