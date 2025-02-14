import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
    emailValidation,
    ISignupData, 
    PasswordField, 
    passwordValidation, 
    useRegisterMutation
} from "../../../features/auth";
import { 
    TextField,
    Button,
    Title
} from "../../../shared/ui";
import { 
    View, 
    Alert, 
    Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../app/navigation";
import { styles } from "./SignupForm.styles";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../features/auth";

export const SignupForm: FC = () => {
    const { 
        control, 
        handleSubmit, 
        watch,
        formState: { errors } 
    } = useForm<ISignupData>({
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },
    });

    const [register, { isLoading }] = useRegisterMutation();
    const navigation = useNavigation<NavigationProp<'Main'>>();
    const dispatch = useDispatch();
    const password = watch("password") || "";

    const onSubmit: SubmitHandler<ISignupData> = async (data) => {
        try {
            const response = await register(data).unwrap();
            if (response.token) {
                await dispatch(setCredentials(response.token));
                navigation.navigate("Main");
            }
        } catch (error: any) {
            const errorMessage = error.data?.message || "Во время регистрации произошла ошибка, попробуйте позднее";
            Alert.alert("Ошибка", errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            <Title size="l" style={styles.title}>
                Регистрация в Task Tracker
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

            <View style={styles.inputContainer}>
                <PasswordField
                    name="repeatPassword"
                    control={control}
                    placeholder="Повторите пароль"
                    secureTextEntry
                    rules={{
                        validate: (value) =>
                            value === password || "Пароли не совпадают",
                    }}
                />
                {errors.repeatPassword && <Text style={styles.errorText}>{errors.repeatPassword.message}</Text>}
            </View>

            <Button
                title={isLoading ? "Регистрация..." : "Продолжить"} 
                onPress={handleSubmit(onSubmit)} 
                disabled={isLoading} 
            />

            <Text style={styles.textCenter}>
                Уже есть аккаунт?{" "}
                <Text 
                    style={styles.link} 
                    onPress={() => navigation.navigate("Signin")}
                >
                    Войти
                </Text>
            </Text>
        </View>
    );
};
