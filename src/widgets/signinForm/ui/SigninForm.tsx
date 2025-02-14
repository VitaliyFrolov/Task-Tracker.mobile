import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
    emailValidation, 
    PasswordField, 
    passwordValidation, 
    saveToken, 
    useLoginMutation 
} from "../../../features/auth";
import { 
    View, 
    Alert, 
    Text,
} from "react-native";
import { 
    TextField,
    Button,
    Title
} from "../../../shared/ui";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../app/navigation";
import { ISigninData } from "../../../features/auth";
import { styles } from "./SigninForm.styles";

export const SigninForm: FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ISigninData>();
    const [login] = useLoginMutation();
    const [isLoadingForm, setIsLoadingForm] = useState(false);
    const navigation = useNavigation<NavigationProp<'Signin'>>();

    const onSubmit: SubmitHandler<ISigninData> = async (data) => {
        setIsLoadingForm(true);

        try {
            const response = await login(data).unwrap();

            if (response.token) {
                await saveToken(response.token);
            }
        } catch (error) {
            Alert.alert(
                "Ошибка", 
                "Во время входа произошла ошибка, попробуйте позднее"
            );
        } finally {
            setIsLoadingForm(false);
        }
    };

    return (
        <View style={styles.container}>
            <Title size="l" style={styles.title}>
                Войти в Task Tracker
            </Title>

            <View style={styles.inputContainer}>
                <TextField
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={emailValidation}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <PasswordField
                    name="password"
                    control={control}
                    placeholder="Введите пароль"
                    secureTextEntry
                    rules={passwordValidation}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>

            <Button
                title={isLoadingForm ? "Вход..." : "Продолжить"} 
                onPress={handleSubmit(onSubmit)} 
                disabled={isLoadingForm} 
            />

            <Text style={styles.textCenter}>
                Еще нет аккаунта?{" "}
                <Text 
                    style={styles.link} 
                    onPress={() => navigation.navigate("Signup")}
                >
                    Зарегистрироваться
                </Text>
            </Text>
        </View>
    );
};
