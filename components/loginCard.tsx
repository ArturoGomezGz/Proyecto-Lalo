import { 
    StyleSheet,
    View,
    Image
} from "react-native";
import Input from "./input";
import SubmitBtn from "./submitBtn";

interface Props {
    color?: string
}

export default function LoginCard({color = "#8744e4ff"}: Props) {
    return (
        <View style={{width: "85%"}}>
            <View>
                <Image 
                    source={require("../assets/images/profileImage.png")} 
                    style={[styles.image, {borderColor: color}]} 
                />
            </View>
            <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor="#F2F2F2" fontColor={color} password={false} />
            <Input labelName="Contraseña" placeholderName="********" backgroundColor="#F2F2F2" fontColor={color} password={true} />
            <SubmitBtn buttonLabel="Iniciar Sesion" backgroundColor={color}/>
            <SubmitBtn buttonLabel="Registrarse" backgroundColor="#a4a4a4ff"/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        alignSelf: "center",
        borderRadius: 50,
        borderWidth: 1.4,
        marginBottom: 20,
    }
});