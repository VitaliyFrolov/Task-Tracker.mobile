import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Main: undefined;
    Signin: undefined;
    Signup: undefined;
    Profile: { userId: string };
};

export type NavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;
