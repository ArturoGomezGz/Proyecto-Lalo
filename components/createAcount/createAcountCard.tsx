import {
    View
} from "react-native";
import PrimaryBtn from "../buttons/primaryBtn";
import Input from "../input";
import Switch from "../switch";
import CreateAcountPicture from "./createAcountPicture";
import SecondaryBtn from "../buttons/secondaryBtn";
import { router } from "expo-router";

interface Props {
    color?: string;
    backgroundColor?: string;
    verticalSpace? : number
}

export default function CreateAcountCard({color = "#8744e4ff", backgroundColor = "white", verticalSpace=30}: Props) {
    return (
        <View style={{width: "85%"}}>
            <CreateAcountPicture color={color} verticalSpace={verticalSpace}/>
            <Input labelName="Nombre Completo" placeholderName="Tu nombre completo" backgroundColor={backgroundColor} fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Switch color={color} verticalSpace={verticalSpace}/>
            <Input labelName="Telefono" placeholderName="1234567890" backgroundColor={backgroundColor} fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Input labelName="Correo" placeholderName="nombre@dominio.com" backgroundColor={backgroundColor} fontColor={color} password={false} verticalSpace={verticalSpace}/>
            <Input labelName="Contraseña" placeholderName="********" backgroundColor={backgroundColor} fontColor={color} password={true} verticalSpace={verticalSpace}/>
            <PrimaryBtn buttonLabel="Crear Cuenta" backgroundColor={color} verticalSpace={verticalSpace}/>
            <SecondaryBtn buttonLabel="Ya tengo una cuenta" backgroundColor={color} verticalSpace={verticalSpace} onPress={() => router.push("/login")}/>
        </View>
    );
}