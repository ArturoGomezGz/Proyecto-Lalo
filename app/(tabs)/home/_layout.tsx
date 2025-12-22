import { 
    StyleSheet, 
    View
} from "react-native";
import { Slot } from "expo-router";
import NavBar from "@/components/navBar/navBar";

export default function HomeLayout() {
    return (
        <View>
            <NavBar activeColor="#8744e4ff" unactiveColor="gray" username="Arturo Gomez Gomez" email="correo@dominio.com"/>
            <View>
                {/* Aquí van las pantallas hijas */}
                <Slot />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});