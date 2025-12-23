import {
    Image,
    StyleSheet,
    View
} from "react-native";
import PrimaryBtn from "../buttons/primaryBtn";
import SecondaryBtn from "../buttons/secondaryBtn";
import Input from "../input";

interface Props {
    color?: string
    backgroundColor?: string;
    verticalSpace? : number
    handleLogin?: () => void
    handleCreateAcount?: () => void
}

export default function LoginCard({color = "red", backgroundColor = "white", verticalSpace, handleLogin, handleCreateAcount}: Props) {
    return (
        <View style={{width: "85%"}}>
            <View>
                <Image 
                    source={require("../../assets/images/profileImage.png")} 
                    style={[styles.image, {borderColor: color}]} 
                />
            </View>
            <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor={backgroundColor} fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Input labelName="Contraseña" placeholderName="********" backgroundColor={backgroundColor} fontColor={color} password={true} verticalSpace={verticalSpace}/>
            <PrimaryBtn buttonLabel="Iniciar Sesion" backgroundColor={color} onPress={handleLogin} verticalSpace={verticalSpace}/>
            <SecondaryBtn buttonLabel="Registrarse" backgroundColor={color} onPress={handleCreateAcount} verticalSpace={verticalSpace}/>
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