import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface ITextFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    placeholder: string;
    secureTextEntry?: boolean;
    rules?: RegisterOptions<T, Path<T>>;
    error?: string;
}
