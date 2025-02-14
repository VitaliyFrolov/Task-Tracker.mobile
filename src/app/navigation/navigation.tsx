import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { SigninScreen } from "../../screens/signinScreen";
import { MainScreen } from "../../screens/mainScreen";
import { SignupScreen } from "../../screens/signupScreen";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

const PublicRoutes = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
);

const PrivateRoutes = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
);

export const AppNavigator = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#6200ea" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    );
};