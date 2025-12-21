import { 
    StyleSheet,
    View,
    Image
} from "react-native";
import { 
    router 
} from "expo-router";
import Input from "../input";
import SubmitBtn from "../submitBtn";

interface Props {
    color?: string
    verticalSpace? : number
    handleLogin?: () => void
    handleCreateAcount?: () => void
}

export default function LoginCard({color = "#8744e4ff", verticalSpace, handleLogin, handleCreateAcount}: Props) {
    return (
        <View style={{width: "85%"}}>
            <View>
                <Image 
                    source={require("../../assets/images/profileImage.png")} 
                    style={[styles.image, {borderColor: color}]} 
                />
            </View>
            <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor="#F2F2F2" fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Input labelName="Contraseña" placeholderName="********" backgroundColor="#F2F2F2" fontColor={color} password={true} verticalSpace={verticalSpace}/>
            <SubmitBtn buttonLabel="Iniciar Sesion" backgroundColor={color} onPress={handleLogin}/>
            <SubmitBtn buttonLabel="Registrarse" backgroundColor={color} onPress={handleCreateAcount}/>
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