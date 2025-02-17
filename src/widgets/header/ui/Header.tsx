import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../../app/navigation";
import { styles } from './Header.styles';
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../../features/auth";

export const Header: FC = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);
    const [ menuOpacity]  = useState(new Animated.Value(0));
    const navigation = useNavigation<NavigationProp<'Main' & 'Signin'>>();
    const dispatch = useDispatch();

    const toggleMenu = (): void => {
        Animated.timing(menuOpacity, {
            toValue: isMenuOpen ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        dispatch(clearCredentials()); 
        navigation.navigate("Signin");
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity 
                onPress={toggleMenu} 
                style={styles.burgerIcon} 
                accessibilityLabel="Открыть меню"
            >
                <Text>
                    menu
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Task Tracker</Text>

            {isMenuOpen && (
                <Animated.View style={[styles.menu, { opacity: menuOpacity }]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <Text style={styles.menuItem}>Главная</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text onPress={handleLogout} style={styles.menuItem}>Выйти</Text>   
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    );
};
