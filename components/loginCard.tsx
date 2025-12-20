import { 
    StyleSheet,
    View,
    Image
} from "react-native";
import Input from "./input";
import SubmitBtn from "./submitBtn";

interface Props {

}

export default function LoginCard() {
    return (
        <View style={{width: "80%"}}>
            <View>
                <Image 
                    source={require("../assets/images/profileImage.png")} 
                    style={styles.image} 
                />
            </View>
            <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor="#F2F2F2" fontColor="#79747E" password={false} />
            <Input labelName="Contraseña" placeholderName="********" backgroundColor="#F2F2F2" fontColor="#79747E" password={true} />
            <SubmitBtn />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        alignSelf: "center",
        borderRadius: 50,
        marginBottom: 20
    }
});