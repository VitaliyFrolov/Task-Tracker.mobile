import { FC } from "react";
import { View, Text} from "react-native";
import { styles } from './MainScreen.styles';

export const MainScreen: FC = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello Mobile!
            </Text>
        </View>
    );
}