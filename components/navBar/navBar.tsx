import { 
    StyleSheet, 
    View,
    Text
} from "react-native";
import Button from "./button";

export default function NavBar() {
    return (
        <View>
            <Text>navBar</Text>
            <View style={styles.buttonContainer}>
                <Button label="Videos"/>
                <Button label="Photos"/>
                <Button label="Audios"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "red"
    }
});