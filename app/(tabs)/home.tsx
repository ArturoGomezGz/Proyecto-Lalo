import { 
    StyleSheet, 
    View
} from "react-native";
import NavBar from "@/components/navBar/navBar";

export default function Home() {
    return (
        <View>
            <NavBar activeColor="#8744e4ff" unactiveColor="gray"/>
        </View>
    );
}

const styles = StyleSheet.create({

});