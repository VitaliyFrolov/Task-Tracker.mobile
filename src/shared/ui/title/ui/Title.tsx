import { FC } from "react";
import { Text } from "react-native";
import { styles, titleSizes } from "./Title.styles";
import { ITitleProps } from "../type/props";

export const Title: FC<ITitleProps> = ({ children, size = "m", style }) => {
    return <Text style={[styles.base, titleSizes[size], style]}>{children}</Text>;
}