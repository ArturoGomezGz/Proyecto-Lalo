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
            <View>
                <Button label="Videos"/>
                <Button label="Photos"/>
                <Button label="Audios"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});