import { FC } from "react";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "../../../shared/ui";
import { styles } from './MainScreen.styles';
import { clearCredentials } from "../../../features/auth/store";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../app/navigation";

export const MainScreen: FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<'Signin'>>();

    const handleLogout = () => {
        dispatch(clearCredentials()); 
        navigation.navigate("Signin");
    };

    return (
        <View style={styles.container}>
            <Text>
                Hello Mobile!
            </Text>
            <Button
                title="Разлогиниться"
                onPress={handleLogout} 
            />
        </View>
    );
};