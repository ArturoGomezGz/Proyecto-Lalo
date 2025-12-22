import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { router } from "expo-router";

interface Props {
    username?: string;
    email?: string;
}

export default function Header({ username = "Guest", email = "No email provided" }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> router.push("/(auth)/login")}>
                <Image 
                source={require("../../assets/images/profileImage.png")}
                style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text>{username}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        marginBottom: 0
    },
    image: {
        width: 40, 
        height: 40, 
        borderRadius: 40
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: "center"
    }
})