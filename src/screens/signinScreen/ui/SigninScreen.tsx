import { FC } from "react";
import { View } from "react-native";
import { SigninForm } from "../../../widgets/signinForm";
import { styles } from './SigninScreen.styles';

export const SigninScreen: FC = () => {
    return (
        <View style={styles.container}>
            <SigninForm />
        </View>
    );
}