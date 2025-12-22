import {
    StyleSheet,
    View,
    Text
} from "react-native";

import styles from "./styles";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Index de la pagina</Text>
        </View>
    );
}