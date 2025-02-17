export interface ICustomButtonProps {
    children: string;
    onPress: () => void;
    variant?: "primary" | "text";
    disabled?: boolean;
    isLoading?: boolean;
}