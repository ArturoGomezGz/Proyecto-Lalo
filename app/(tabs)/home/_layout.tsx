import NavBar from "@/components/navBar/navBar";
import { router, Slot } from "expo-router";
import {
    StyleSheet,
    View,
    StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
    const snedToProfile = () => {
        router.push("/profile");
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>
                <NavBar handleProfileClick={snedToProfile} activeColor="#8744e4ff" unactiveColor="gray" username="Arturo Gomez Gomez" email="correo@dominio.com"/>
                <View style={{flex: 1}}>
                    <Slot />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        borderRadius: 10
    }
});