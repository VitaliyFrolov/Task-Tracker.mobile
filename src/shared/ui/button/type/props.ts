export interface ICustomButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "text";
    disabled?: boolean;
    isLoading?: boolean;
}