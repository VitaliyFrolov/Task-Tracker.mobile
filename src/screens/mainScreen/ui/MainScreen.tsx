import { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from './MainScreen.styles';
import { Header } from "../../../widgets/header";
import { useProfileQuery } from "../../../features/auth";

export const MainScreen: FC = () => {
    const { data, error, isLoading } = useProfileQuery({});
    
    return (
        <View style={styles.container}>
            <Header />
            {isLoading && <ActivityIndicator size="large" color="#6200ea" />}
            {error && <Text style={{ color: "red" }}>Ошибка загрузки профиля</Text>}
            {data && <Text>Привет, {data.email}!</Text>}
        </View>
    );
};