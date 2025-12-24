import {
    StyleSheet,
    View,
    Text
} from "react-native";

import styles from "./styles";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Bienvenido a la 'NOMBRE DE LA APP'</Text>
        </View>
    );
}