import { StackNavigationProp } from "@react-navigation/stack";
import { store } from "../store";

export type RootStackParamList = {
    Main: undefined;
    Signin: undefined;
    Signup: undefined;
    Profile: { userId: string };
};

export type NavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;