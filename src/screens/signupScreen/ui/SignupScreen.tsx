import { FC } from "react";
import { View } from "react-native";
import { SignupForm } from "../../../widgets/signupForm";
import { styles } from './SignupScreen.styles';

export const SignupScreen: FC = () => {
    return (
        <View style={styles.container}>
            <SignupForm/>
        </View>
    );
}