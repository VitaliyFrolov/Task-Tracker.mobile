import { TextStyle } from "react-native";

export interface ITitleProps {
    children: React.ReactNode;
    size?: "s" | "m" | "l" | "xl";
    style?: TextStyle;
}